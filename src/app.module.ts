import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafiosModule } from './desafios/desafios.module';
import { PartidasModule } from './partidas/partidas.module';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';
import configuration from './config/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                uri: configService.get('mongoDbUrl'),
                useNewUrlParser: true,
                keepAlive: true,
                useUnifiedTopology: true
            }),
            inject: [ConfigService]
        }),
        DesafiosModule,
        PartidasModule,
        ProxyRMQModule,
    ],
})
export class AppModule {}
