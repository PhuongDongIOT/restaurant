import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class RestService {
    private client: ClientProxy;
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.MQTT,
            options: {
                url: 'mqtt://localhost:1883', // Replace with your MQTT broker URL
            },
        });
    }

    async getConnected() {
        console.log('---------------> here is the connection is establishing!')
        this.client.emit<any>('mqtt-topic', { data: '----------------> message from MQTT' });
        return "connection created!"
    }


    async turnOn() {
        console.log('-----------------> Turning on...')
        this.client.emit<any>('turn-on', { data: '----------------> message from MQTT' });
        return "LED turning on"
    }


    async turnOff() {
        this.client.emit<any>('turn-off', { data: '----------------> message from MQTT' });
        return "LED turning off"
    }

    async blink(value: any) {
        this.client.emit<any>('blink', { data: value.value });
        return `LED Blinking with value ${value.value}`
    }

    async blinkSlow() {
        this.client.emit<any>('blink-slow', { data: '----------------> message from MQTT' });
        return "LED Blinking slow"
    }

    async blinkFast() {
        this.client.emit<any>('blink-fast', { data: '----------------> message from MQTT' });
        return "LED Blinking fast"
    }

    async blue() {
        this.client.emit<any>('blue-led', { data: '----------------> message from MQTT' });
        return "LED blue is on"
    }

    async green() {
        this.client.emit<any>('green-led', { data: '----------------> message from MQTT' });
        return "LED green is on"
    }

  async yellow() {
        this.client.emit<any>('yellow-led', { data: '----------------> message from MQTT' });
        return "LED yellow is on"
    }

 async white() {
        this.client.emit<any>('white-led', { data: '----------------> message from MQTT' });
        return "LED white is on"
    }


    async red() {
        this.client.emit<any>('red-led', { data: '----------------> message from MQTT' });
        return "LED red is on"
    }

  async randomBlink() {
        this.client.emit<any>('random-blink', { data: '----------------> message from MQTT' });
        return "LED random blink is on"
    }
}
