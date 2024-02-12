import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DepositeTest } from './client/CasinoModule/casinoModuleTest';

import { ClientModule } from './client/client.module';
import { ServerModule } from './server/server.module';

@Module({
  imports: [EventEmitterModule.forRoot(), ClientModule, ServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
