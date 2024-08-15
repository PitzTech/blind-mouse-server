import { MikroOrmController } from './orm/mikro_orm';

export const DalController = {
  OrmModule: {
    forRoot: () => MikroOrmController(),
  },
};
