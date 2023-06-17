import { ApiProperty } from "@nestjs/swagger";
import { IsPositive, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    
    @IsPositive() // Valido si es positivo
    @IsOptional() // No es obligatorio de incluir
    @ApiProperty({
        name: 'id',
        type: Number,
        required: false,
        description: 'Identificador del usuario'
    })
    id?: number;
    
    @IsNotEmpty() // Es obligatorio de incluir
    @ApiProperty({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del usuario'
    })
    name: string;
    
    @IsNotEmpty() // Es obligatorio de incluir
    @IsEmail() // Debe tener un formato de email
    @ApiProperty({
        name: 'email',
        type: String,
        required: true,
        description: 'Email del usuario'
    })
    email: string;
}
