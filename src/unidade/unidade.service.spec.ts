import { Test, TestingModule } from '@nestjs/testing';
import { UnidadeService } from './unidade.service';

describe('UnidadeService', () => {
  let service: UnidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadeService],
    }).compile();

    service = module.get<UnidadeService>(UnidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
