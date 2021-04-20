import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './schema/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new this.todoModel(createTodoDto);
    return await todo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().populate(['author']).exec();
  }

  async findOne(id: string): Promise<Todo> {
    const todo = await this.todoModel.findById({ _id: id }).exec();
    if (!todo) throw new BadRequestException();
    return todo;
  }

  update(id: number, updateTodoDto: any) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
