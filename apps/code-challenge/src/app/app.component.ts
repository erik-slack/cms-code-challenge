import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WidgetsEntity, WidgetsFacade, WidgetTypeEnum } from '@impartner/cms/state/widgets';

@Component({
  selector: 'impartner-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'code-challenge';
  mode: ModeEnum = ModeEnum.edit;
  modesEnum = ModeEnum;
  widgetTypesEnum = WidgetTypeEnum;
  widgets$: Observable<WidgetsEntity[]>;
  widgets: WidgetsEntity[];
  USER_FIRST_NAME = 'Ted';

  private count = 0;
  private ngUnsubscribe = new Subject();

  constructor(
    private widgetsFacade: WidgetsFacade
  ) {}

  ngOnInit(): void {
    this.widgets$ = this.widgetsFacade.allWidgets$;
    this.widgets$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((widgets) => this.widgets = widgets
        .map((widget) => ({...widget}))
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  setMode(mode: ModeEnum): void {
    this.mode = mode;
  }

  addWidget(type: WidgetTypeEnum): void {
    const DEFAULT_WIDGET: WidgetsEntity = {
      id: this.count++,
      name: `${type} Widget`,
      type: type
    };
    let newWidget: WidgetsEntity;

    switch (type) {
      case WidgetTypeEnum.image:
        newWidget = {
          ...DEFAULT_WIDGET,
          image: 'https://i.pinimg.com/originals/de/af/3e/deaf3eedb3d4645661c557622067b4ae.gif'
        };
        break;
      case WidgetTypeEnum.text:
        newWidget = {
          ...DEFAULT_WIDGET,
          text: ''
        };
        break;
      case WidgetTypeEnum.hello:
        newWidget = {
          ...DEFAULT_WIDGET
        };
        break;
    }
    this.widgetsFacade.addWidget(newWidget);
  }

  updateWidget(widget: WidgetsEntity): void {
    this.widgetsFacade.updateWidget(widget);
  }

  deleteWidget(widgetId: number): void {
    this.widgetsFacade.deleteWidget(widgetId);
  }

}

enum ModeEnum {
  edit = 'edit',
  preview = 'preview'
}
