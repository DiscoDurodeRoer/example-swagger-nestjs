import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags("Users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiOperation({
    description: 'Crea un usuario'
  })
  @ApiBody({
    type: CreateUserDto,
    description: 'Crea un usuario usando un CreateUserDto',
    examples: {
      ejemplo1: {
        value: {
          name: "User1",
          email: "f@gmail.com"
        }
      },
      ejemplo2: {
        value: {
          name: "User2",
          email: "f2@gmail.com"
        }
      }
    }
  })
  @ApiResponse({
    status: 201,
    description: 'Usuario creado correctamente'
  })
  @ApiResponse({
    status: 409,
    description: `El id ya existe<br/>
                   El email ya existe`
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    description: 'Devuelve la información de todos los usuarios'
  })
  @ApiResponse({
    status: 200,
    description: 'Usuarios devueltos correctamente'
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Devuelve la información de un usuario'
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Codigo del usuario que queremos devolver'
  })
  @ApiResponse({
    status: 200,
    description: 'Usuario devuelto correctamente'
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'Actualiza un usuario'
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Codigo del usuario que vamos a actualizar'
  })
  @ApiBody({
    type: UpdateUserDto,
    description: 'Actualiza un usuario usando un UpdateUserDto',
    examples: {
      ejemplo1: {
        value: {
          name: "User2",
          email: "f@gmail.com",
        }
      },
      ejemplo2: {
        value: {
          name: "User3",
          email: "f2@gmail.com"
        }
      }
    }
  })
  @ApiResponse({
    status: 200,
    description: 'Usuario actualizado correctamente'
  })
  @ApiResponse({
    status: 409,
    description: `El id ya existe<br/>
                   El email ya existe`
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    description: 'Elimina un usuario'
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Codigo del usuario que vamos a eliminar'
  })
  @ApiResponse({
    status: 200,
    description: 'Usuario borrado'
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
