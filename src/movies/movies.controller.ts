import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {  
    constructor(private readonly movieService: MoviesService){}
    
    @Get()
    getAll():Movie[]{
        return this.movieService.getAll();
    }
    
    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie{
        return this.movieService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.movieService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieID:number){
        return this.movieService.deleteOne(movieID);
    }

    @Patch('/:id')
    patch(@Param('id') movieID:number, @Body() updateData:UpdateMovieDto){
        return this.movieService.update(movieID, updateData);
    }
}