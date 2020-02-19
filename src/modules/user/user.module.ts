import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbService } from 'src/services/db/db.service';

@Module({
  providers: [UserService, DbService],
  controllers: [UserController]
})
export class UserModule {}
