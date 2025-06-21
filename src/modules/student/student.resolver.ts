import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student, StudentInput } from './student.module';

@Resolver(() => Student)
export class StudentResolver {
  private students: Student[] = [];
  private idCounter = 1;

  @Mutation(() => Student)
  enrollStudent(@Args('input') input: StudentInput): Student {
    const student = { id: this.idCounter++, ...input };
    this.students.push(student);
    return student;
  }
  

  @Mutation(() => Student)
  updateStudent(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: StudentInput,
  ): Student {
    const student = this.students.find(s => s.id === id);
    if (!student) throw new Error('Student not found');
    Object.assign(student, input);
    return student;
  }

  @Mutation(() => Boolean)
  removeStudent(@Args('id', { type: () => Int }) id: number): boolean {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) return false;
    this.students.splice(index, 1);
    return true;
  }

  @Query(() => [Student])
  getStudentsByClass(@Args('className') className: string): Student[] {
    return this.students.filter(s => s.class === className);
  }

  // Helper for attendance to access students
  findStudentById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  // expose all for testing
  @Query(() => [Student])
  getAllStudents(): Student[] {
    return this.students;
  }
}
