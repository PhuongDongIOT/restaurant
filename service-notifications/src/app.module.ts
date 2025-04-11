import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';
import { RestModule } from './rest/rest.module';

@Module({
  imports: [MqttModule, RestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
