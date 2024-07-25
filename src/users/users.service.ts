import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { data } from 'src/Data/data';
import { CreateUserDto, UpdateUserDto } from 'src/types/Dtos/userDtos';

@Injectable()
export class UsersService {
  private users = data;

  getAllUsers() {
    if (this.users.length < 1) {
      throw new NotFoundException('data is empty');
    }

    return this.users;
  }

  getUserById(id: number) {
    const findUser = this.users.find((user) => user.id === id);

    if (!findUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return findUser;
  }

  createUser(userDto: CreateUserDto) {
    const lastId = this.users[this.users.length - 1].id;
    const id = lastId ? lastId + 1 : 1;

    const newUser = {
      id,
      ...userDto,
    };

    return newUser;
  }

  updateUser(id: number, updatedUser: UpdateUserDto) {
    const findIndex = this.users.findIndex((user) => user.id === id);

    if (findIndex === -1) {
      throw new HttpException(`User not found`, HttpStatus.NOT_FOUND);
    }

    this.users[findIndex] = {
      ...this.users[findIndex],
      ...updatedUser,
    };

    return this.users[findIndex];
  }
}
