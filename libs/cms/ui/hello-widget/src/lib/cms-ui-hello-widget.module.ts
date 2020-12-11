import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HelloWidgetComponent } from './hello-widget.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [HelloWidgetComponent],
  exports: [HelloWidgetComponent]
})
export class CmsUiHelloWidgetModule {}
