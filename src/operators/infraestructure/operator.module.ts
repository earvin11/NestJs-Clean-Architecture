import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OperatorModel, OperatorSchema } from './models/operator.model';
import { OperatorController } from './operator.controller';
import { OperatorUseCases } from '../application/operator.use-cases';
import { OperatorMongoRepository } from './repositories/operator.mongo-repository';
import { OperatorRepository } from '../domain/operator.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OperatorModel.name, schema: OperatorSchema },
    ]),
  ],
  controllers: [OperatorController],
  providers: [
    OperatorUseCases,
    OperatorMongoRepository,
    {
      provide: OperatorRepository,
      useExisting: OperatorMongoRepository,
    },
  ],
  exports: [OperatorUseCases],
})
export class OperatorModule {}
