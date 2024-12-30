import { OperatorEntity } from 'src/operators/domain/operator.entity';

export interface PlayerEntity {
  uuid?: string;
  username: string;
  lastBalance: number;
  status?: boolean;
  isAdmin?: boolean;
  tokenWallet: string;
  WL?: string;
  operator: OperatorEntity;
  userId: string;
}
