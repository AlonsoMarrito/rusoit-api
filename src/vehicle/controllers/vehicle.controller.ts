import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
  BadRequestException,
  Req,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import cloudinary from '../../cloudinary/cloudinary.provider';
import { VehicleService } from '../services/vehicle.service';
import { CreateVehicleDto } from '../dto/create-vehicle.dto';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 5))
  async createVehicle(@UploadedFiles() files: Express.Multer.File[], @Req() req: any) {
    const body = req.body;

    if (!body.unit || !body.type || !body.plates) {
      throw new BadRequestException('Faltan datos obligatorios (unit, type o plates).');
    }

    body.date_register = new Date().toISOString();

    const photos: Record<string, string> = {};
    const keys = ['front', 'back', 'right', 'left', 'top'];

    for (let i = 0; i < files.length; i++) {
      const key = keys[i] || `file${i}`;
      const file = files[i];
      const base64 = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

      try {
        const result = await cloudinary.uploader.upload(base64, {
          folder: `ruso-it/vehicles/${body.type}/${body.unit}`,
        });
        photos[key] = result.secure_url;
      } catch (error) {
        console.error('Error subiendo archivo a Cloudinary', error);
        throw new BadRequestException('Error subiendo archivo a Cloudinary');
      }
    }

    const createVehicleDto: CreateVehicleDto = {
      number_unit: Number(body.unit),
      type: body.type,
      vehicle_license_plates: body.plates,
      model: body.model || '',
      card_brand: body.brand || '',
      status: body.status || '',
      kilometers: Number(body.kmCurrent) || 0,
      kilometers_to_service: Number(body.kmService) || 0,
      date_register: new Date(body.date_register),
      cover_img: photos.right || '',
      front_img: photos.front || '',
      back_img: photos.back || '',
      left_img: photos.left || '',
      up_img: photos.top || '',
    };

    // Guardar en DB
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update(+id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleService.remove(+id);
  }
}
