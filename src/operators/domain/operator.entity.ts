export interface OperatorEntity {
  uuid?: string;
  name: string;
  clientUuid: string;
  status?: boolean;
  minBet: number;
  maxBet: number;
  endpointAuth: string;
  endpointBet: string;
  endpointWin: string;
  endpointRollback: string;
  casinoToken: string;
  available?: boolean;
}
