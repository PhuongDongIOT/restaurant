import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RestService } from './rest.service';

@Controller('rest')
export class RestController {
  constructor(private readonly restService: RestService) { }

  @Get()
  async getConnection() {
    return await this.restService.getConnected()
  }
  @Get('/on')
  async turnOn() {
    console.log('--------> request received')
    return await this.restService.turnOn()
  }

  @Get('/off')
  async turnOff() {
    console.log('--------> request received')
    return await this.restService.turnOff()
  }

  @Post('/blink')
  async blink(@Body() value: any) {
    return await this.restService.blink(value)
  }

  @Get('/blink-slow')
  async blinkSlow() {
    return await this.restService.blinkSlow()
  }

  @Get('/blink-fast')
  async blinkFast() {
    return await this.restService.blinkFast()
  }

  @Get('/on-blue')
  async blue() {
    return await this.restService.blue()
  }

  @Get('/on-red')
  async red() {
    return await this.restService.red()
  }

  @Get('/on-green')
  async green() {
    return await this.restService.green()
  }

  @Get('/on-yellow')
  async yellow() {
    return await this.restService.yellow()
  }

  @Get('/on-white')
  async white() {
    return await this.restService.white()
  }

  @Get('/random-blink')
  async randomBlink() {
    return await this.restService.randomBlink()
  }
}
