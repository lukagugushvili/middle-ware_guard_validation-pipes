import { IData } from '../dataTypes';

export class CreateUserDto {
  name: string;
  lastName: string;
  isRegistered: boolean;
}

export class UpdateUserDto implements Partial<IData> {
  id: number;
  name: string;
  lastName: string;
  isRegistered: boolean;
}
