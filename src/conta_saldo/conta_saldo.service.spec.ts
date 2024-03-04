import { Test, TestingModule } from '@nestjs/testing';
import { ContaSaldoService } from './conta_saldo.service';

describe('ContaSaldoService', () => {
  let service: ContaSaldoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContaSaldoService],
    }).compile();

    service = module.get<ContaSaldoService>(ContaSaldoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
