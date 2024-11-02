import { Injectable } from '@nestjs/common';
import { VideosRepository } from './videos.repository';

@Injectable()
export class VideosService {
  constructor(private videosRepository: VideosRepository) {}
}
