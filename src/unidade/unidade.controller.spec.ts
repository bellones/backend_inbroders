import { Test, TestingModule } from '@nestjs/testing';
import { UnidadeController } from './unidade.controller';
import { UnidadeService } from './unidade.service';

describe('UnidadeController', () => {
  let controller: UnidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadeController],
      providers: [UnidadeService],
    }).compile();

    controller = module.get<UnidadeController>(UnidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
