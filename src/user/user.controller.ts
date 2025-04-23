import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateUserDTO } from './dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { LoginGoogleDTO } from './dto/check-email.dto';
import { Public } from '../auth/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('/login')
  login(@Body() login: LoginDTO) {
    return this.userService.login(login);
  }

  @Post('login-google')
  async loginGoogle(@Body() payload: LoginGoogleDTO) {
    return this.userService.loginGoogle(payload);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.userService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
