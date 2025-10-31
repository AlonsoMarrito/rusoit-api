import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DamagesService } from '../service/damages.service';
import { CreateDamageDto } from '../dto/create-damage.dto';
import { UpdateDamageDto } from '../dto/update-damage.dto';

@Controller('damages')
export class DamagesController {
  constructor(private readonly damagesService: DamagesService) {}

  @Post()
  create(@Body() createDamageDto: CreateDamageDto) {
    return this.damagesService.create(createDamageDto);
  }

  @Get()
  findAll() {
    return this.damagesService.findAllAllVehicles();
  }

  @Get('inone-vehicle/:id')
  findAllAboutOneVehicle(@Param('id') id: string) {
    return this.damagesService.findAllAboutOneVehicle(+id);
  }

  @Get('damage/:id')
  findOneVehicleById(@Param('id') id: string) {
    return this.damagesService.findOneVehicleById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDamageDto: UpdateDamageDto) {
    return this.damagesService.update(+id, updateDamageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.damagesService.remove(+id);
  }
}
