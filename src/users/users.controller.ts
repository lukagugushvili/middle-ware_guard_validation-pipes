import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { IData } from 'src/types/dataTypes';
import { CreateUserDto, UpdateUserDto } from 'src/types/Dtos/userDtos';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): IData[] {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id): IData {
    return this.usersService.getUserById(parseInt(id));
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Put('/:id')
  updateUser(
    @Param('id') id,
    @Body() updatedUser: UpdateUserDto,
  ): UpdateUserDto {
    return this.usersService.updateUser(parseInt(id), updatedUser);
  }
}
