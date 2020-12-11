import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromWidgets from './widgets.reducer';
import * as WidgetsActions from './widgets.actions';

@Injectable()
export class WidgetsEffects {
  loadWidgets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.loadWidgets),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return WidgetsActions.loadWidgetsSuccess({ widgets: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return WidgetsActions.loadWidgetsFailure({ error });
        },
      })
    )
  );

  addWidget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.addWidget),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return WidgetsActions.addWidgetSuccess({ widget: action.widget });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return WidgetsActions.addWidgetFailure({ error });
        },
      })
    )
  );

  updateWidget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.updateWidget),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return WidgetsActions.updateWidgetSuccess({ widget: action.widget });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return WidgetsActions.updateWidgetFailure({ error });
        },
      })
    )
  );

  deleteWidget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.deleteWidget),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return WidgetsActions.deleteWidgetSuccess({ widgetId: action.widgetId });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return WidgetsActions.deleteWidgetFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
