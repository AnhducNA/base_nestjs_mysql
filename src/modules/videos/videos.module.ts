import { UsersEntity } from '@entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosRepository } from './videos.repository';
import { VideosService } from './videos.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [],
  providers: [VideosRepository, VideosService],
  exports: [],
})
export class VideosModule {}
