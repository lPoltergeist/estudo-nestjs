import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosServices } from './recados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recado])],
  controllers: [RecadosController],
  providers: [RecadosServices],
})
export class RecadosModule {}
