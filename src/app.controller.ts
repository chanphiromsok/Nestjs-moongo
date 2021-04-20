import { Controller, Get, Redirect, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  @Redirect('/api')
  getHello(@Res() res: Response) {
    res.send('Success');
  }
}
