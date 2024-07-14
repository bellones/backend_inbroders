export class CreateUserAddressDTO {
  id?: string;
  idUsuario?: string;
  cep: string;
  local: string;
  numero: string;
  bairro: string;
  complemento: string;
  observacao: string;
  cidade: string;
  estado: string;
  principal: boolean;
}
