import { Module } from '@nestjs/common';
import { ProducerService } from './producer/producer.service';
import { ConsumerService } from './services/consumer.service';
import { ProducerService } from './services/producer.service';
import { ProducerService } from './producer.service';
import { ProducerService } from './producer/producer.service';

@Module({
  providers: [ProducerService, ConsumerService]
})
export class KafkaModule {}
