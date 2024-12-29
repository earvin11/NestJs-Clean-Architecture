export interface BetEntity {
  id?: string;
  uuid?: string;
  bet: Record<string, any>; // Tipar apuesta
  playerUuid: string;
  totalAmount: number;
  currencyUuid: string;
  gameUuid: string;
  isPaid: boolean;
}
