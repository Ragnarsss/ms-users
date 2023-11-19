import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/user.dto';

@Injectable()
export class UsersService {
  constructor() {}
  findAll() {
    return;
  }

  findOne(id: number) {
    const user = {};
    if (!user) {
      throw new NotFoundException(`El usuario de id ${id} no existe`);
    } else {
      return id;
    }
  }

  create(payload: CreateUserDto) {
    const newUser = {
      ...payload,
    };
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {}

  delete(id: number) {}
}
