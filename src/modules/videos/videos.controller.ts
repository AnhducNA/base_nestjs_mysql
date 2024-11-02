import { BaseController } from '@modules/app/base.controller';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './videos.dto';
import { logger } from '@logs/app.log';
import { CustomizeException } from '@exception/customize.exception';
@Controller('videos')
export class VideosController extends BaseController {
  constructor(private readonly videosService: VideosService) {
    super();
  }

  @Get()
  async getAllVideos(@Res() res: any) {
    const data = await this.videosService.getAllVideos();
    return this.successResponse({ data }, res);
  }

  @Post()
  async createVideo(@Body() body: CreateVideoDto, @Res() res: any) {
    try {
      const data = await this.videosService.createVideo(body);
      return this.successResponse({ message: 'success', data }, res);
    } catch (e) {
      logger.error('error createVideo: ' + e.message);
      throw new CustomizeException(
        e.message.toString(),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put(':id')
  async updateLink(
    @Param('id') id: number,
    @Body() { link }: { link: string },
    @Res() res: any,
  ) {
    try {
      const data = await this.videosService.updateLink(id, link);
      return this.successResponse({ message: 'success', data }, res);
    } catch (e) {
      logger.error('error updateLink: ' + e.message);
      throw new CustomizeException(
        e.message.toString(),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
