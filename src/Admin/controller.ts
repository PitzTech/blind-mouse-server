import { getAdminConfig } from './constants';

const AdminController = {
  authenticate: async (email: string, password: string) => {
    const DEFAULT_ADMIN = getAdminConfig();

    console.log({
      email,
      password,
      email_d: DEFAULT_ADMIN.email,
      password_d: DEFAULT_ADMIN.password,
    });

    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      return DEFAULT_ADMIN;
    }
    return null;
  },
};

export const AdminModule = {
  forRoot: () => {
    // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
    return import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            rootPath: '/admin',
            resources: [],
          },
          auth: {
            authenticate: AdminController.authenticate,
            cookieName: 'adminjs',
            cookiePassword: 'secret',
          },
          sessionOptions: {
            resave: true,
            saveUninitialized: true,
            secret: 'secret',
          },
        }),
      }),
    );
  },
};
