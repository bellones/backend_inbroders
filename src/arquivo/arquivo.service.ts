import { Injectable } from '@nestjs/common';
import { Arquivo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArquivoDto } from './dto/create-arquivo.dto';

@Injectable()
export class ArquivoService {
  constructor(private prisma: PrismaService) {}

  async getFile(id: string): Promise<Arquivo> {
    return await this.prisma.arquivo.findFirst({
      where: {
        id: id,
      },
    });
  }

  async salvarVariosDados(files: Express.Multer.File[]): Promise<Arquivo[]> {
    const list: Arquivo[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const arquivo = new CreateArquivoDto();
      arquivo.fileName = file.filename;
      arquivo.contentLength = file.size.toString();
      arquivo.contentType = file.mimetype;
      arquivo.url = `http://localhost:3333/upload/files/${file.filename}`;
      const item = await this.prisma.arquivo.create({
        data: arquivo,
      });
      list.push(item);
    }

    return list;
  }
}
