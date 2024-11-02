import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Videos } from '@entities/videos.entity';

@Injectable()
export class VideosRepository extends Repository<Videos> {
  constructor(private dataSource: DataSource) {
    super(Videos, dataSource.createEntityManager());
  }
}
