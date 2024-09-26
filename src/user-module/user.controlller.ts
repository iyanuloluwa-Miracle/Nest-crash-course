import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe, } from "@nestjs/common";
import { UserService } from "./user.service"; // Correct the import

import { User } from './interface/user';
import { UseParamsDto, UserDto } from "./dto/user.dto";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {} // Capitalize UserService

  @Get()
  getUsers(
    @Param('id', ParseIntPipe) id:number,
    @Query('sort') sort: boolean,
    @Body() data: UserDto
  ): User[] {
    return this.userService.getUsers();
  }

   
  @Get('/:email')
  getUser(@Param('email') email:string): User{
    return this.userService.getUser(email);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  postUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param() params: UseParamsDto): User[] {
    return this.userService.deleteUser(params.email);
  }
}
