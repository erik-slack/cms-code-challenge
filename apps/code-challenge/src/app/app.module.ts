import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { NxModule } from '@nrwl/angular';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';

import { CmsStateWidgetsModule } from '@impartner/cms/state/widgets';
import { CmsUiHelloWidgetModule } from '@impartner/cms/ui/hello-widget';
import { CmsUiImageWidgetModule } from '@impartner/cms/ui/image-widget';
import { CmsUiTextWidgetModule } from '@impartner/cms/ui/text-widget';

import { AppComponent } from './app.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['auth' /* , 'accounts' */],
    rehydrate: true
  })(reducer);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { router: routerReducer },
      {
        metaReducers: true// !environment.production
          ? [storeFreeze, localStorageSyncReducer]
          : [localStorageSyncReducer]
      }
    ),
    EffectsModule.forRoot([]),
    /* !environment.production */ true ? StoreDevtoolsModule.instrument() : [],
    CmsStateWidgetsModule,
    CmsUiHelloWidgetModule,
    CmsUiImageWidgetModule,
    CmsUiTextWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
