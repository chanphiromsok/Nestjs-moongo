import { DatabaseModule } from './config/database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { TodoModule } from './module/todo/todo.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ envFilePath: 'env/.env', isGlobal: true }),
    UserModule,
    TodoModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
