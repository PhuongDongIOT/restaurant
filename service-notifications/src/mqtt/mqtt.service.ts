import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Gpio } from 'onoff';
let isOn = false;
let intervalId;


@Injectable()
export class MqttService {
  private client: ClientProxy;
  private readonly led: Gpio;
  private readonly led1: Gpio;
  private readonly led2: Gpio;
  private readonly led3: Gpio;
  private readonly led4: Gpio;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://localhost:1883', // Replace with your MQTT broker URL
      },
    });
    this.led = new Gpio(18, 'out');
    this.led1 = new Gpio(17, 'out');
    this.led2 = new Gpio(22, 'out');
    this.led3 = new Gpio(15, 'out');
    this.led4 = new Gpio(25, 'out');
  }

  sendMessage(): void {
    this.client.emit<any>('mqtt-topic', 'Hello this message from the MQTT service. sulli is here');
  }

  async turnOnLed() {
    this.led.writeSync(1);
    this.led1.writeSync(1);
    this.led2.writeSync(1)
    this.led3.writeSync(1)
    this.led4.writeSync(1)
  }

  async blinkFast() {
    intervalId = setInterval(() => {
      if (isOn) {
        this.led.writeSync(1)
        this.led1.writeSync(1)
        this.led2.writeSync(0)
        this.led3.writeSync(0)
        this.led4.writeSync(1)
        isOn = !isOn
      } else {
        this.led.writeSync(0)
        this.led1.writeSync(0)
        this.led2.writeSync(1)
        this.led3.writeSync(1)
        this.led4.writeSync(0)
        isOn = !isOn
      }
    }, 1000)
  }

  // async randomBlink() {
  //   intervalId = setInterval(() => {
  //     if (isOn) {
  //       this.led.writeSync(1)
  //       this.led1.writeSync(1)
  //       this.led2.writeSync(0)
  //       this.led3.writeSync(0)
  //       this.led4.writeSync(1)
  //       isOn = !isOn
  //     } else {
  //       this.led.writeSync(0)
  //       this.led1.writeSync(0)
  //       this.led2.writeSync(1)
  //       this.led3.writeSync(1)
  //       this.led4.writeSync(0)
  //       isOn = !isOn
  //     }
  //   }, 1000)
  // }

  async randomBlink() {
    intervalId = setInterval(() => {
      const randomState = Math.random() > 0.5; // Generate a random boolean value

      if (randomState) {
        // Turn on a random combination of LEDs
        this.turnOnRandomLEDs();
      } else {
        // Turn off all LEDs
        this.turnOffLed();
      }
    }, 1000);
  }

  turnOnRandomLEDs() {
    // Assuming all LEDs are represented by an array
    const leds = [this.led, this.led1, this.led2, this.led3, this.led4];

    // Choose a random LED index
    const randomIndex = Math.floor(Math.random() * leds.length);

    // Turn off all LEDs
    this.turnOffLed();

    // Turn on the randomly selected LED
    leds[randomIndex].writeSync(1);
  }



  async blink(value: any) {
    clearInterval(intervalId)
    this.led1.writeSync(0)
    intervalId = setInterval(() => {
      if (isOn) {
        this.led.writeSync(0)
        this.led1.writeSync(0)
        this.led2.writeSync(0)
        this.led3.writeSync(0)
        this.led4.writeSync(0)
        isOn = !isOn
      } else {
        this.led.writeSync(1)
        this.led1.writeSync(1)
        this.led2.writeSync(1)
        this.led3.writeSync(1)
        this.led4.writeSync(1)
        isOn = !isOn
      }
    }, value.data)
  }

  async blinkSlow() {
    clearInterval(intervalId)
    this.led1.writeSync(0)
    intervalId = setInterval(() => {
      if (isOn) {
        this.led.writeSync(0)
        this.led1.writeSync(0)
        this.led2.writeSync(0)
        this.led3.writeSync(0)
        this.led4.writeSync(0)
        isOn = !isOn
      } else {
        this.led.writeSync(1)
        this.led1.writeSync(1)
        this.led2.writeSync(1)
        this.led3.writeSync(1)
        this.led4.writeSync(1)
        isOn = !isOn
      }
    }, 1000)
  }

  async turnOffLed() {
    this.led.writeSync(0);
    this.led1.writeSync(0);
    this.led2.writeSync(0);
    this.led3.writeSync(0);
    this.led4.writeSync(0)
    clearInterval(intervalId)
  }

  async blueLed() {
    this.led.writeSync(1);
    this.led1.writeSync(0);
    this.led2.writeSync(0);
    this.led3.writeSync(0);
    this.led4.writeSync(0)
  }

  async greenLed() {
    this.led.writeSync(0);
    this.led1.writeSync(0);
    this.led2.writeSync(0);
    this.led3.writeSync(1);
    this.led4.writeSync(0)
  }

  async redLed() {
    this.led.writeSync(0);
    this.led1.writeSync(0);
    this.led2.writeSync(0);
    this.led3.writeSync(0);
    this.led4.writeSync(1)
  }
  async yellowLed() {
    this.led.writeSync(0);
    this.led1.writeSync(1);
    this.led2.writeSync(0);
    this.led3.writeSync(0);
    this.led4.writeSync(0)
  }

  async whiteLed() {
    this.led.writeSync(0);
    this.led1.writeSync(0);
    this.led2.writeSync(1);
    this.led3.writeSync(0);
    this.led4.writeSync(0)
  }

}