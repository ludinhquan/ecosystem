import { Module } from '@nestjs/common';
import { AppController } from './appController';

@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {}
