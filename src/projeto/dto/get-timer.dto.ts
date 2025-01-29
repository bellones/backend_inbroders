export class GetTimerDto {
  id: string;
  taskId?: string;
  task: {
    code: string;
    titulo: string;
  };
  projectId?: number;
  projeto: {
    descricao: string;
  };
  description?: string;
  initialMoment: Date;
  finalMoment: Date;
  userId: string;
}
