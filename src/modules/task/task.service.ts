import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {TaskInfoDTO} from './dto/task-info.dto'
import { Task } from '../models/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {
  }

  create(createTaskDto) {
    createTaskDto.services.forEach(element => {
      this.taskRepository.save({
        ticket_id: createTaskDto.ticket_id,
        type: element.type,
        start_date: element.start_date,
        end_date: element.end_date
      });
    });
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
