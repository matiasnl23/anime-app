import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIShortItemComponent } from './components/short-item/short-item.component';

const COMPONENTS = [UIShortItemComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class UIModule {}
