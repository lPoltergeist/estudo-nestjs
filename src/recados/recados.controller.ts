import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RecadosServices } from './recados.service';

@Controller('recados')
export class RecadosController {
    constructor(private readonly recadosServices: RecadosServices) {}

    @Get()
    findAll(@Query() pagination: any) {
        // const { limit = 10, offset = 0 } = pagination;
        // console.log(limit, offset)
        return this.recadosServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
       return this.recadosServices.findOne(id);
    }

    @Post()
    create(@Body() body: any) {
        return this.recadosServices.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() Body: any) {
         this.recadosServices.update(id, Body);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        console.log('remove', id)
         this.recadosServices.remove(id);
    }
}
