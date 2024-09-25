import { Body, Controller, Delete, Get, Param, Post, } from "@nestjs/common";
import { UserService } from "./user.service"; // Correct the import

import { User } from './interface/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {} // Capitalize UserService

  @Get()
  getUser(): User[] {
    return this.userService.getUser();
  }

  @Post()
  postUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param('email') email:string): User[] {
    return this.userService.deleteUser(email);
  }
}
