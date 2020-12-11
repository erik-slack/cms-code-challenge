import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWidgets from '././widgets.reducer';
import { WidgetsEffects } from '././widgets.effects';
import { WidgetsFacade } from '././widgets.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromWidgets.WIDGETS_FEATURE_KEY,
      fromWidgets.reducer
    ),
    EffectsModule.forFeature([WidgetsEffects]),
  ],
  providers: [WidgetsFacade],
})
export class CmsStateWidgetsModule {}
