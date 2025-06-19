import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty({message: 'Task name is required'})
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsInt({message: 'User ID must be an integer'})
    userId: number;
}