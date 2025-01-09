import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { isDevMode } from '@angular/core';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './post-state/store/reducer';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from './post-state/store/effect';
import { provideHttpClient } from '@angular/common/http';
import { shoppingCartReducer } from './shopping-cart/store/reducer';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideHttpClient(),
  provideClientHydration(),
  provideStore({ 'Posts': reducers }),
  provideStore({ 'Cart': shoppingCartReducer }),
  provideEffects(),
  provideStoreDevtools({
    maxAge: false, // Retains last 25 states
    logOnly: !isDevMode(), // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    /* trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
     traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
     connectInZone: true // If set to true, the connection is established within the Angular zone */
  })]
};
