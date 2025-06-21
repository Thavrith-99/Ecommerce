import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum AttendanceStatus {
  P = 'P',
  AP = 'AP',
  L = 'L',
  A = 'A',
}

registerEnumType(AttendanceStatus, {
  name: 'AttendanceStatus',
});

@ObjectType()
export class Attendance {
  @Field()
  session: string;

  @Field(() => AttendanceStatus)
  status: AttendanceStatus;

  @Field(() => Int)
  student_id: number;

  @Field()
  marker: string;
}

@InputType()
export class AttendanceInput {
  @Field()
  session: string;

  @Field(() => AttendanceStatus)
  status: AttendanceStatus;

  @Field(() => Int)
  student_id: number;

  @Field()
  marker: string;
}
