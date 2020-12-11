import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

import { WidgetsEntity } from '@impartner/cms/state/widgets';

@Component({
  selector: 'impartner-hello-widget',
  templateUrl: './hello-widget.component.html',
  styleUrls: ['./hello-widget.component.scss']
})
export class HelloWidgetComponent implements OnInit {
  @Input() userName = '';
  @Input() readOnly = false;
  @Input() widget: WidgetsEntity;
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();

  now = moment().toString();

  constructor() { }

  ngOnInit(): void {
  }

  deleteBtnClicked(): void {
    this.deleteEvent.emit();
  }

}
