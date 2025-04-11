import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432, 
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    autoLoadEntities: true, // carrega automaticamente as entidades
    synchronize: true // sincroniza automaticamente as entidades, não usar em produção
  }), RecadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
