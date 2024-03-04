import { Injectable } from '@nestjs/common';
import { CreateContaSaldoDto } from './dto/create-conta_saldo.dto';
import { UpdateContaSaldoDto } from './dto/update-conta_saldo.dto';

@Injectable()
export class ContaSaldoService {
  create(createContaSaldoDto: CreateContaSaldoDto) {
    return 'This action adds a new contaSaldo';
  }

  findAll() {
    return `This action returns all contaSaldo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contaSaldo`;
  }

  update(id: number, updateContaSaldoDto: UpdateContaSaldoDto) {
    return `This action updates a #${id} contaSaldo`;
  }

  remove(id: number) {
    return `This action removes a #${id} contaSaldo`;
  }
}
