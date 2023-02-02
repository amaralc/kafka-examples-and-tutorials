import { Module } from '@nestjs/common';
import { ConsumerService } from './services/consumer.service';
import { ProducerService } from './services/producer.service';

@Module({
  providers: [ProducerService, ConsumerService],
  exports: [ProducerService, ConsumerService],
})
export class KafkaModule {}
