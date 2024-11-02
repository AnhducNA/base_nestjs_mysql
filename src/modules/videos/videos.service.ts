import { Injectable } from '@nestjs/common';
import { VideosRepository } from './videos.repository';
import { ICreateVideo } from '@shared/interfaces/videos.interface';
import { plainToClass } from 'class-transformer';
import { Videos } from '@entities/videos.entity';

@Injectable()
export class VideosService {
  constructor(private videosRepository: VideosRepository) {}

  async getAllVideos() {
    return await this.videosRepository.find();
  }
  async createVideo(params: ICreateVideo) {
    const paramCreate: ICreateVideo = plainToClass(Videos, {
      taskId: params.taskId,
      userId: params.userId,
      link: params.link,
      status: params.status,
    });
    return await this.videosRepository.save(paramCreate);
  }

  async updateLink(id: number, link: string) {
    return await this.videosRepository.update({ id }, { link });
  }
}
