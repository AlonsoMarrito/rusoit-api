import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleRegistrationService } from '../service/vehicle_registration.service';
import { CreateVehicleRegistrationDto } from '../dto/create-vehicle_registration.dto';
import { UpdateVehicleRegistrationDto } from '../dto/update-vehicle_registration.dto';
import { ApiTags, ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('vehicle-registration')
@ApiTags('vehicles')
export class VehicleRegistrationController {
  constructor(private readonly vehicleRegistrationService: VehicleRegistrationService) {}

  @Post()
  create(@Body() createVehicleRegistrationDto: CreateVehicleRegistrationDto) {
    return this.vehicleRegistrationService.create(createVehicleRegistrationDto);
  }

  @Get()
  findAll() {
    return this.vehicleRegistrationService.findAll();
  }

  @Get(':id')
  findOneVehicleAllRecords(@Param('id') idVehicle: string) {
    return this.vehicleRegistrationService.findOneVehicleAllRecords(+idVehicle);
  }

  @ApiOkResponse({
    description: 'Example response for vehicle lights',
    schema: {
      example: {
        id: 1,
        vehicle_id: 1,
        driver_id: 1,
        luz_delantera_alta: 'Bueno',
        luz_delantera_baja: 'Bueno',
        luces_de_emergencia: 'Malo',
        luces_neblineros: 'Malo',
        luz_direccional: 'Optimo',
        luz_de_freno: 'N/A',
        luz_de_reversa: 'N/A',
        luces_del_tanque_cisterna: 'Sin',
        luces_interior_cabina: 'Sin',
      },
    },
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the vehicle',
    example: 1,
  })
  @Get('vehicle-logs-light/:id')
  findGroupLight(@Param('id') id: string) {
    return this.vehicleRegistrationService.findGroupLight(+id);
  }

  @ApiOkResponse({
    description: 'Example response for vehicle bodywork',
    schema: {
      example: {
        id: 1,
        vehicle_id: 1,
        driver_id: 1,
        motor_adicional: 'Bueno',
        estado_de_tablero_indicadores: 'Malo',
        elevadores_de_cristales: 'N/A',
        espejos_lateral_derecho: 'Bueno',
        espejos_lateral_izquierdo: 'Malo',
        espejo_retrovisor: 'Bueno',
        cristal_parabrisas: 'N/A',
        cristal_medallon: 'Bueno',
        cristal_de_puertas: 'Malo',
      },
    },
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the vehicle',
    example: 1,
  })
  @Get('vehicle-logs-bodywork/:id')
  findGroupBodywork(@Param('id') id: string) {
    return this.vehicleRegistrationService.findGroupBodywork(+id);
  }

  @ApiOkResponse({
    description: 'Example response for tools and equipment',
    schema: {
      example: {
        id: 1,
        vehicle_id: 1,
        driver_id: 1,
        gato_hidraulico: 'Bueno',
        herramientas_cambio_de_ruedas: 'Malo',
        bocina_de_sonoros: 'N/A',
        modulo_luminosos_sonoros: 'Bueno',
        torreta: 'Malo',
        cinturones_de_seguridad: 'Bueno',
        limpia_parabrisas: 'N/A',
        poliza_seguro: 'Bueno',
        tarjeta_circulacion: 'Malo',
      },
    },
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the vehicle',
    example: 1,
  })
  @Get('vehicle-logs-tools/:id')
  findGroupTools(@Param('id') id: string) {
    return this.vehicleRegistrationService.findGroupTools(+id);
  }

  @ApiOkResponse({
    description: 'Example response for caps and fluids',
    schema: {
      example: {
        id: 1,
        vehicle_id: 1,
        driver_id: 1,
        tapon_tanque_combustible: 'Bueno',
        tapon_aceite: 'Malo',
        tapon_agua: 'N/A',
        nivel_aceite_motor: 'Bueno',
        nivel_aceite_transmision: 'Malo',
        nivel_agua_radiador: 'N/A',
        nivel_liquido_frenos: 'Bueno',
      },
    },
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the vehicle',
    example: 1,
  })
  @Get('vehicle-logs-liquids/:id')
  findGroupLiquids(@Param('id') id: string) {
    return this.vehicleRegistrationService.findGroupLiquids(+id);
  }

  @ApiOkResponse({
    description: 'Example response for tires',
    schema: {
      example: {
        id: 1,
        vehicle_id: 1,
        driver_id: 1,
        llanta_delantera_derecha: 'Bueno',
        llanta_delantera_izquierda: 'Malo',
        llanta_trasera_derecha: 'N/A',
        llanta_trasera_izquierda: 'Bueno',
        llanta_repuesto: 'Malo',
      },
    },
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the vehicle',
    example: 1,
  })
  @Get('vehicle-logs-tires/:id')
  findGroupTires(@Param('id') id: string) {
    return this.vehicleRegistrationService.findGroupTires(+id);
  }

  @ApiOkResponse({
    description: 'Example response for engine start',
    schema: {
      example: {
        id: 1,
        vehicle_id: 1,
        driver_id: 1,
        llaves_encendido: 'Bueno',
        switch_encendido: 'Malo',
        bateria: 'Bueno',
        postes_terminales_bateria: 'N/A',
      },
    },
  })
  @ApiParam({
    name: 'id',
    description: 'ID of the vehicle',
    example: 1,
  })
  @Get('vehicle-logs-engine/:id')
  findGroupEngine(@Param('id') id: string) {
    return this.vehicleRegistrationService.findGroupEngine(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleRegistrationDto: UpdateVehicleRegistrationDto) {
    return this.vehicleRegistrationService.update(+id, updateVehicleRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleRegistrationService.remove(+id);
  }
}
