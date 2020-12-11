import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { WidgetsEntity } from '@impartner/cms/state/widgets';

@Component({
  selector: 'impartner-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.scss']
})
export class ImageWidgetComponent implements OnInit {
  @Input() widget: WidgetsEntity;
  @Input() readOnly = false;
  @Output() widgetBlurredEvent: EventEmitter<WidgetsEntity> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  widgetBlurred(): void {
    this.widgetBlurredEvent.emit(this.widget);
  }

  deleteBtnClicked(): void {
    this.deleteEvent.emit();
  }

}
