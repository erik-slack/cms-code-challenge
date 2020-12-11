import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { TextWidgetComponent } from './text-widget.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CKEditorModule
  ],
  declarations: [TextWidgetComponent],
  exports: [TextWidgetComponent]
})
export class CmsUiTextWidgetModule {}
