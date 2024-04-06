import { Module } from '@nestjs/common'
import { SharedModule } from './shared/shared.module'
import { OrderModule } from './order/order.module';

@Module({
  imports: [SharedModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
