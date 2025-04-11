import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MqttService } from './mqtt.service';
import { CreateMqttDto } from './dto/create-mqtt.dto';
import { UpdateMqttDto } from './dto/update-mqtt.dto';

@Controller()
export class MqttController {
  constructor(private readonly mqttService: MqttService) { }


  @MessagePattern('yourExpectedTopic')
  handleMessage(@Payload() payload: any): void {
    console.log('Received message:', payload);
    // Handle the message in your microservice
  }
  // For MQTT
  @MessagePattern('mqtt-topic')
  handleMessage1(data: any): string {
    console.log('------------------> Received message:', data);
    return 'Hello, MQTT!';
  }

  // @MessagePattern('findAllMqtt')
  // findAll() {
  //   return this.mqttService.findAll();
  // }

  @MessagePattern('turn-on')
  turnOn() {
    return this.mqttService.turnOnLed();
  }

  @MessagePattern('turn-off')
  turnOff() {
    return this.mqttService.turnOffLed();
  }

  @MessagePattern('blink')
  blink(@Payload() value: any) {
    console.log(">>>>>>>>>>>?><>", value)
    return this.mqttService.blink(value);

  }

   @MessagePattern('blue-led')
  blueLed() {
    return this.mqttService.blueLed();

  }
 @MessagePattern('green-led')
  greenLed() {
    return this.mqttService.greenLed();

  }
 @MessagePattern('red-led')
  redLed() {
    return this.mqttService.redLed();

  }

 @MessagePattern('yellow-led')
  yellowLed() {
    return this.mqttService.yellowLed();

  }

 @MessagePattern('white-led')
  whiteLed() {
    return this.mqttService.whiteLed();

  }

  @MessagePattern('blink-slow')
  blinkSlow() {
    return this.mqttService.blinkSlow();
  }


  @MessagePattern('blink-fast')
  blinkfast() {
    return this.mqttService.blinkFast();
  }

  @MessagePattern('random-blink')
  randomBlink() {
    return this.mqttService.randomBlink();
  }


  // @MessagePattern('updateMqtt')
  // update(@Payload() updateMqttDto: UpdateMqttDto) {
  //   return this.mqttService.update(updateMqttDto.id, updateMqttDto);
  // }

  // @MessagePattern('removeMqtt')
  // remove(@Payload() id: number) {
  //   return this.mqttService.remove(id);
  // }
}
