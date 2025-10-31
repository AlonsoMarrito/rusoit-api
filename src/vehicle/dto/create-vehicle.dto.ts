import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsNumber,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({
    description: 'Número único de la unidad',
    example: 101,
  })
  @IsInt()
  @IsNotEmpty()
  number_unit: number;

  @ApiProperty({
    description: 'Tipo de vehículo (ejemplo: Camión, Auto, Moto)',
    example: 'Camión',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    description: 'Imagen de portada del vehículo',
    example: 'https://res.cloudinary.com/.../cover.jpg',
  })
  @IsString()
  @IsString()
  cover_img: string;

  @ApiProperty({
    description: 'Imagen lateral izquierda',
    example: 'https://res.cloudinary.com/.../left.jpg',
  })
  @IsString()
  left_img: string;

  @ApiProperty({
    description: 'Imagen superior',
    example: 'https://res.cloudinary.com/.../up.jpg',
  })
  @IsString()
  up_img: string;

  @ApiProperty({
    description: 'Imagen frontal',
    example: 'https://res.cloudinary.com/.../front.jpg',
  })
  @IsString()
  front_img: string;

  @ApiProperty({
    description: 'Imagen trasera',
    example: 'https://res.cloudinary.com/.../back.jpg',
  })
  @IsString()
  back_img: string;

  @ApiProperty({
    description: 'Kilometraje actual del vehículo',
    example: 15000.5,
  })
  @IsNumber()
  kilometers: number;

  @ApiProperty({
    description: 'Kilometraje al que se debe dar servicio',
    example: 20000.0,
  })
  @IsNumber()
  kilometers_to_service: number;

  @ApiProperty({
    description: 'Fecha de registro del vehículo',
    example: '2025-09-27T00:00:00.000Z',
  })
  @IsDateString()
  date_register: Date;

  @ApiProperty({
    description: 'Placas del vehículo',
    example: 'XYZ-1234',
  })
  @IsString()
  @IsNotEmpty()
  vehicle_license_plates: string;

  @ApiProperty({
    description:
      'Estado actual del vehículo (ejemplo: operativo, en mantenimiento, fuera de servicio)',
    example: 'operativo',
  })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    description: 'Modelo del vehículo',
    example: '2022',
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    description: 'Marca de la tarjeta de circulación',
    example: 'Nissan',
  })
  @IsString()
  @IsNotEmpty()
  card_brand: string;
}
