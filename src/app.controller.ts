import {Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("test")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("create")
  create(){
    console.log("post")
  }

}
