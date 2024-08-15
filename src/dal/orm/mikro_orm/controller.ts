import { Options } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { getDBConfig } from 'src/dal/utils';

export const MikroOrmController = () => {
  const { clientUrl, dbName, entities, entitiesTs } = getDBConfig();

  const config: Options = {
    driver: PostgreSqlDriver,
    clientUrl,
    dbName,
    entities,
    entitiesTs,
    ensureDatabase: false,
  };

  return MikroOrmModule.forRoot(config);
};
