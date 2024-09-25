import { Module } from '@nestjs/common';
import { UserController } from './user.controlller';
import { UserService } from './user.service'; // Fix the import and capitalization

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
