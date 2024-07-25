import { IData } from '../dataTypes';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsBoolean()
  @IsNotEmpty()
  isRegistered: boolean;
}

export class UpdateUserDto implements Partial<IData> {
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  lastName: string;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  isRegistered: boolean;
}
