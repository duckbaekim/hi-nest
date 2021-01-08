import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
@Controller('todo')
export class TodoController {
  constructor(readonly todoService: TodoService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }
  @Post()
  async create(@Body() todoData: CreateTodoDto) {
    return await this.todoService.create(todoData);
  }

  @Delete('/:id')
  async remove(@Param('id') id: number) {
    await this.todoService.remove(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData: UpdateTodoDto) {
    return this.todoService.update(id, updateData);
  }
}
