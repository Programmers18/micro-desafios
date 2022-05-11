import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Main');
const configService = new ConfigService();

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: [
                `amqp://${configService.get(
                    'rabbitMQUser',
                )}:${configService.get('rabbitMQPassword')}@${configService.get(
                    'rabbitMQUrl',
                )}`,
            ],
            noAck: false,
            queue: 'desafios',
        },
    });
    await app.listen();
    logger.log(`Microservice is listening!`)
}
bootstrap();
