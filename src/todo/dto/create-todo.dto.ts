import { IsString, IsOptional } from 'class-validator';
export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly context: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly StartAt: string;

  @IsString()
  readonly EndAt: string;
}
