import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {TaskInfoDTO} from './dto/task-info.dto'
// import { queryITSM } from 'src/util/psql';

const { Pool } = require('pg')

const pool = new Pool({
    host: "192.168.0.19",
    port: 5432,
    user: "postgres",
    password: "123",
    database: "itsm",
});

@Injectable()
export class TaskService {

  create(createTaskDto: CreateTaskDto) {
    let query = "INSERT INTO task(start_date, end_date, ticket_id) VALUES ($1, $2, $3);"

    return 'This action adds a new task';
  }

  findAll() {
    let query = `SELECT * from task`
    let response: any

    pool.query(query, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
    return '1'
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
