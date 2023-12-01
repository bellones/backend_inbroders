import {
  Controller,
  Get,
  Param,
  Post,
  StreamableFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { ArquivoService } from './arquivo.service';
import multerConfig from './multer-config';

@Controller('arquivo')
export class ArquivoController {
  constructor(private readonly arquivoService: ArquivoService) {}

  @Get(':id')
  async getFile(@Param('id') id: string) {
    const item = await this.arquivoService.getFile(id);
    const file = createReadStream(
      join(process.cwd(), 'upload/files/' + item.fileName),
    );
    return new StreamableFile(file);
  }

  @Post('multiplo')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'arquivos' }], multerConfig))
  uploadVariosArquivos(
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.arquivoService.salvarVariosDados(files['arquivos']);
  }
}
