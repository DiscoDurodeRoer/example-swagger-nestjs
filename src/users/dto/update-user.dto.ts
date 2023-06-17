import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

// PartialType: hereda todas las propiedades de CreateUserDto y hace que sean opcionales
export class UpdateUserDto extends PartialType(CreateUserDto) {}
