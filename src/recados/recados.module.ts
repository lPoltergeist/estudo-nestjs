import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosServices } from './recados.service';

@Module({
  controllers: [RecadosController],
  providers: [RecadosServices],
})
export class RecadosModule {}
