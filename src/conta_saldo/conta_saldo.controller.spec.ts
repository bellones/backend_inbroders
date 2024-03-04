import { Test, TestingModule } from '@nestjs/testing';
import { ContaSaldoController } from './conta_saldo.controller';
import { ContaSaldoService } from './conta_saldo.service';

describe('ContaSaldoController', () => {
  let controller: ContaSaldoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContaSaldoController],
      providers: [ContaSaldoService],
    }).compile();

    controller = module.get<ContaSaldoController>(ContaSaldoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
