import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import { loadWidgets, addWidget, deleteWidget, updateWidget } from './widgets.actions';
import { WidgetsEntity } from './widgets.models';
import * as fromWidgets from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

@Injectable()
export class WidgetsFacade {
  loaded$ = this.store.pipe(select(WidgetsSelectors.getWidgetsLoaded));
  allWidgets$ = this.store.pipe(select(WidgetsSelectors.getAllWidgets));
  selectedWidgets$ = this.store.pipe(select(WidgetsSelectors.getSelected));

  constructor(private store: Store<fromWidgets.WidgetsPartialState>) {}

  getWidgets() {
    this.store.dispatch(loadWidgets());
  }

  addWidget(widget: WidgetsEntity) {
    this.store.dispatch(addWidget({widget}));
  }

  updateWidget(widget: WidgetsEntity) {
    this.store.dispatch(updateWidget({widget}));
  }

  deleteWidget(widgetId: number) {
    this.store.dispatch(deleteWidget({widgetId}));
  }

}
