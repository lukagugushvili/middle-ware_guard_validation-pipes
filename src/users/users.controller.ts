import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IData } from 'src/types/dataTypes';
import { CreateUserDto, UpdateUserDto } from 'src/types/Dtos/userDtos';
import { DPPGuard } from 'src/guards/D.P.P.guard';
import { UseGuardForGetMethod } from 'src/guards/get.guard';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(UseGuardForGetMethod)
  @Get()
  getAllUsers(): IData[] {
    return this.usersService.getAllUsers();
  }

  @UseGuards(UseGuardForGetMethod)
  @Get('/:id')
  getUserById(@Param('id') id): IData {
    return this.usersService.getUserById(parseInt(id));
  }

  @UseGuards(DPPGuard)
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @UseGuards(DPPGuard)
  @Put('/:id')
  updateUser(
    @Param('id') id,
    @Body() updatedUser: UpdateUserDto,
  ): UpdateUserDto {
    return this.usersService.updateUser(parseInt(id), updatedUser);
  }

  @UseGuards(DPPGuard)
  @Delete('/:id')
  deleteUser(@Param('id') id) {
    return this.usersService.deleteUser(parseInt(id));
  }
}
