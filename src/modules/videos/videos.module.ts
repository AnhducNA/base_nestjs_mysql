import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosRepository } from './videos.repository';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { Videos } from '@entities/videos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Videos])],
  controllers: [VideosController],
  providers: [VideosRepository, VideosService],
  exports: [],
})
export class VideosModule {}
