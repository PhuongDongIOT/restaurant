import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://localhost:1883', // Change the MQTT broker URL as needed
    },
  })
  
  app.enableCors();
  await app.listen(3001);
  // For MQTT
  await app.startAllMicroservices();
}
bootstrap();
