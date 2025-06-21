import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students: any[] = [];
  private attendance: any[] = [];
  private lastStudentId = 0;

  enrollStudent(name: string, idCard: string, className: string) {
    const newStudent = { id: ++this.lastStudentId, name, idCard, class: className };
    this.students.push(newStudent);
    return newStudent;
  }

  removeStudent(id: number) {
    const index = this.students.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Student not found');
    return this.students.splice(index, 1)[0];
  }

  updateStudent(id: number, name?: string, idCard?: string, className?: string) {
    const student = this.students.find(s => s.id === id);
    if (!student) throw new Error('Student not found');
    if (name) student.name = name;
    if (idCard) student.idCard = idCard;
    if (className) student.class = className;
    return student;
  }

  getStudentsByClassName(className: string) {
    return this.students.filter(s => s.class === className);
  }

  markAttendance(session: string, student_id: number, status: string, marker: string) {
    const attendance = { session, student_id, status, marker };
    this.attendance.push(attendance);
    return attendance;
  }

  removeAttendance(session: string, student_id: number) {
    const index = this.attendance.findIndex(a => a.session === session && a.student_id === student_id);
    if (index === -1) throw new Error('Attendance not found');
    return this.attendance.splice(index, 1)[0];
  }

  countAttendanceByClassName(className: string) {
    const studentIds = this.students.filter(s => s.class === className).map(s => s.id);
    return this.attendance.filter(a => studentIds.includes(a.student_id)).length;
  }

  countAttendanceByStudentID(studentId: number) {
    return this.attendance.filter(a => a.student_id === studentId).length;
  }
}