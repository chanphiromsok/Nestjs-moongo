import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGOOSE'),
        autoCreate: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
