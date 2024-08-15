import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './Admin';
import { DalController } from './dal';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AdminModule.forRoot(),
    DalController.OrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
