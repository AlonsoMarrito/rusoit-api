import { Controller, Post, Get, Patch, Delete, Body, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import cloudinary from '../../cloudinary/cloudinary.provider';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { TypeToVehiclesService } from '../service/type_to_vehicles.service';
import { UpdateTypeToVehicleDto } from '../dto/update-type_to_vehicle.dto';
import { CreateTypeToVehicleDto } from '../dto/create-type_to_vehicle.dto';

@Controller('type-to-vehicles')
export class TypeToVehiclesController {
  constructor(private readonly typeToVehiclesService: TypeToVehiclesService) {}

  @Post('create-new_type')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        filename: (_, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  async uploadToExistingFolder(
    @UploadedFile() file: Express.Multer.File,
    @Body('name') name: string,
  ): Promise<CreateTypeToVehicleDto> {
    if (!file) throw new Error('No se envió archivo');
    if (!name || !name.trim())
      throw new Error('No se envió nombre de la clase');

    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'ruso-it/type_to_vehicles', // Carpeta fija
      });

      return this.typeToVehiclesService.create(result.secure_url, name);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  @Get()
  findAll() {
    return this.typeToVehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeToVehiclesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeToVehicleDto: UpdateTypeToVehicleDto) {
    return this.typeToVehiclesService.update(+id, updateTypeToVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeToVehiclesService.remove(+id);
  }
}
