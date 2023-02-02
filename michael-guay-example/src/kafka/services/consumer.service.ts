import { Injectable } from '@nestjs/common';
import {
  Consumer,
  ConsumerRunConfig,
  ConsumerSubscribeTopics,
  Kafka,
} from 'kafkajs';

type Unpacked<T> = T extends (infer U)[] ? U : T;

@Injectable()
export class ConsumerService {
  private readonly kafka = new Kafka({
    brokers: ['localhost:9092'],
  });
  private readonly consumers: Consumer[] = [];

  async consume(
    topic: {
      topic: Unpacked<ConsumerSubscribeTopics['topics']>;
      fromBeginning: boolean;
    },
    config: ConsumerRunConfig,
  ) {
    const consumer = this.kafka.consumer({ groupId: 'nestjs-kafka' });
    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);
    this.consumers.push(consumer);
  }
}
