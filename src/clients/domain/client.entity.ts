export interface ClientEntity {
  uuid?: string;
  name: string;
  endpointAuth: string;
  endpointRollback: string;
  endpointBet: string;
  endpointWin: string;
  logo?: string;
  loaderLogo?: string;
  status?: boolean;
  available?: boolean;
  useLogo?: boolean;
}
