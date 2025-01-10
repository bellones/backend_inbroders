export class GetTaskDto {
  id: string;
  code: string;
  status: string;
  titulo: string;
  descricao: string;
  projetoId: number;
  dataEstimativa: Date;
  dataCriacao: Date;
  userCriadorId: string;
  userResponsavelId: string;
  projeto: {
    descricao: string;
  };
  userCriador: {
    nome: string;
  };
  userResponsavel: {
    nome: string;
  };
}
