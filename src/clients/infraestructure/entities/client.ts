import { ClientEntity } from 'src/clients/domain/client.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client implements ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column({ nullable: true })
  uuid?: string;

  @Column()
  endpointAuth: string;

  @Column()
  endpointRollback: string;

  @Column()
  endpointBet: string;

  @Column()
  endpointWin: string;

  @Column()
  logo?: string;

  @Column()
  loaderLogo?: string;

  @Column()
  status?: boolean;

  @Column()
  available?: boolean;

  @Column()
  useLogo?: boolean;
}
