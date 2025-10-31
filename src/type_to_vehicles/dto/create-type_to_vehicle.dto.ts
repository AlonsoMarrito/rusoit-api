import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateTypeToVehicleDto {
  @ApiProperty({ example: 'Car', description: 'The type of vehicle' })
  @IsString()
  type: string | null;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/sample.jpg',
    description: 'URL of the vehicle type image',
  })
  @IsString()
  imageUrl: string | null;

  @ApiProperty({ example: 1, description: 'Number of operative vehicles' })
  @IsNumber()
  operative: number | null;

  @ApiProperty({ example: 1, description: 'Number of in-operative vehicles' })
  @IsNumber()
  in_operative: number | null;
}
