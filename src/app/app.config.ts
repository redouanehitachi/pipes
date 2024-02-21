import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ConvertPipe } from './convert.pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
