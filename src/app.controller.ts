import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Post('')
  async blabla() {
    console.log('this is test');
    this.eventEmitter.emit('order.created', {
      userId: 1,
      optionid: 4,
    });
    console.log('test');
    return { message: 'Response taken' };
  }
}
