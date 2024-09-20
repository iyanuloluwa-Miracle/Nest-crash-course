import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      user: {
        id: id,
      },
    };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
