import { createAction, props } from '@ngrx/store';
import { WidgetsEntity } from './widgets.models';

export const loadWidgets = createAction('[Widgets] Load Widgets');

export const loadWidgetsSuccess = createAction(
  '[Widgets] Load Widgets Success',
  props<{ widgets: WidgetsEntity[] }>()
);

export const loadWidgetsFailure = createAction(
  '[Widgets] Load Widgets Failure',
  props<{ error: any }>()
);

export const addWidget = createAction(
  '[Widgets] Add Widget',
  props<{ widget: WidgetsEntity }>()
);

export const addWidgetSuccess = createAction(
  '[Widgets] Add Widget Success',
  props<{ widget: WidgetsEntity }>()
);

export const addWidgetFailure = createAction(
  '[Widgets] Add Widget Failure',
  props<{ error: any }>()
);

export const updateWidget = createAction(
  '[Widgets] Update Widget',
  props<{ widget: WidgetsEntity }>()
);

export const updateWidgetSuccess = createAction(
  '[Widgets] Update Widget Success',
  props<{ widget: WidgetsEntity }>()
);

export const updateWidgetFailure = createAction(
  '[Widgets] Update Widget Failure',
  props<{ error: any }>()
);

export const deleteWidget = createAction(
  '[Widgets] Delete Widget',
  props<{ widgetId: number }>()
);

export const deleteWidgetSuccess = createAction(
  '[Widgets] Delete Widget Success',
  props<{ widgetId: number }>()
);

export const deleteWidgetFailure = createAction(
  '[Widgets] Delete Widget Failure',
  props<{ error: any }>()
);
