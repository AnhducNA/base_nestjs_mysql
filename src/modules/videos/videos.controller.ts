import { BaseController } from '@modules/app/base.controller';
import { Controller, Get, Res } from '@nestjs/common';
import { VideosService } from './videos.service';
@Controller('videos')
export class VideosController extends BaseController {
  constructor(private readonly videosService: VideosService) {
    super();
  }

  @Get()
  async getAllVideos(@Res() res: any) {
    return this.successResponse({ data: { a: 123 } }, res);
  }
}
