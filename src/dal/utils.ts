export const getDBConfig = () => {
  const { DB_URL, DB_NAME } = process.env;

  if (!DB_URL || !DB_NAME) {
    throw new Error('ENVS DATABASE NÃO CONFIGURADAS!');
  }

  return {
    entities: ['./dist/dal/entities'],
    entitiesTs: ['./src/dal/entities'],
    clientUrl: DB_URL,
    dbName: DB_NAME,
  };
};
