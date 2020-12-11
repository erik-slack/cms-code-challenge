import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { WidgetsEntity } from '@impartner/cms/state/widgets';

@Component({
  selector: 'impartner-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.scss']
})
export class TextWidgetComponent implements OnInit {
  @Input() widget: WidgetsEntity;
  @Input() readOnly = false;
  @Output() widgetBlurredEvent: EventEmitter<WidgetsEntity> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();

  editor = ClassicEditor;

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
