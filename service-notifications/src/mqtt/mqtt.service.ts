import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
let intervalId;


@Injectable()
export class MqttService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://localhost:1883', // Replace with your MQTT broker URL
      },
    });
  }

  sendMessage(): void {
    this.client.emit<any>('mqtt-topic', 'Hello this message from the MQTT service. sulli is here');
  }

  async turnOnLed() {
    console.log("turnOnLed");
  }

  async blinkFast() {
    intervalId = setInterval(() => {
    console.log("blinkFast");
    }, 1000)
  }

  async randomBlink() {
    intervalId = setInterval(() => {
      console.log("randomBlink");
    }, 1000);
  }

  turnOnRandomLEDs() {
    // Assuming all LEDs are represented by an array
    console.log("turnOnRandomLEDs");
  }



  async blink(value: any) {
    console.log("blink");
    
  }

  async blinkSlow() {
    clearInterval(intervalId)
    console.log("blinkSlow");
    
  }

  async turnOffLed() {
    console.log("turnOffLed");
    clearInterval(intervalId)
  }

  async blueLed() {
    console.log("blueLed");
  }

  async greenLed() {
    console.log("greenLed");
    
  }

  async redLed() {
    console.log("redLed");
    
  }
  async yellowLed() {
    console.log("yellowLed");
    
  }

  async whiteLed() {
    console.log("whiteLed");
    
  }

}