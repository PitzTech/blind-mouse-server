export const getAdminConfig = () => {
  const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('ENVS ADMIN NÃO CONFIGURADAS!');
  }

  return {
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
  };
};
