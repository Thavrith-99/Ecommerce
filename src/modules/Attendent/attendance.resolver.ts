import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Attendance, AttendanceInput, AttendanceStatus } from './attendance.model';
import { StudentResolver } from '../student/student.resolver';


@Resolver(() => Attendance)
export class AttendanceResolver {
  private attendanceRecords: Attendance[] = [];

  constructor(private readonly studentResolver: StudentResolver) {}

  @Mutation(() => Attendance)
  markAttendance(@Args('input') input: AttendanceInput): Attendance {
    const student = this.studentResolver.findStudentById(input.student_id);
    if (!student) throw new Error('Student not found');
    const record = { ...input };
    this.attendanceRecords.push(record);
    return record;
  }

  @Mutation(() => Boolean)
  removeAttendance(
    @Args('student_id', { type: () => Int }) student_id: number,
    @Args('session') session: string,
  ): boolean {
    const index = this.attendanceRecords.findIndex(
      r => r.student_id === student_id && r.session === session,
    );
    if (index === -1) return false;
    this.attendanceRecords.splice(index, 1);
    return true;
  }

  @Query(() => Int)
  countAttendanceByClass(@Args('className') className: string): number {
    const students = this.studentResolver.getStudentsByClass(className);
    const ids = students.map(s => s.id);
    return this.attendanceRecords.filter(a => ids.includes(a.student_id)).length;
  }

  @Query(() => Int)
  countAttendanceByStudent(@Args('student_id', { type: () => Int }) student_id: number): number {
    return this.attendanceRecords.filter(a => a.student_id === student_id).length;
  }

  @Query(() => [Attendance])
  getAllAttendance(): Attendance[] {
    return this.attendanceRecords;
  }
}
