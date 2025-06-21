import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  idCard: string;

  @Field()
  class: string;
}

@InputType()
export class StudentInput {
  @Field()
  name: string;

  @Field()
  idCard: string;

  @Field()
  class: string;
}
