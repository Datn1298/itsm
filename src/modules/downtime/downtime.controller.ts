import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DowntimeService } from './downtime.service';
// import { CreateDowntimeDto } from './dto/create-downtime.dto';
// import { UpdateDowntimeDto } from './dto/update-downtime.dto';

@Controller('downtime')
export class DowntimeController {
  constructor(private readonly downtimeService: DowntimeService) {}

  @Post()
  create(@Body() createDowntimeDto) {
    return this.downtimeService.create(createDowntimeDto);
  }

  @Get()
  findAll() {
    return this.downtimeService.findAll();
  }

  @Get(':id')
  findOneByTicketID(@Param('id') id: number) {
    return this.downtimeService.findOneByTicketID(id);
  }

  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDowntimeDto: UpdateDowntimeDto) {
  //   return this.downtimeService.update(+id, updateDowntimeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.downtimeService.remove(+id);
  // }
}
