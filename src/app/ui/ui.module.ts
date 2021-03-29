import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIAlert } from './components/alert/alert.component';
import { UIShortItemComponent } from './components/short-item/short-item.component';

const COMPONENTS = [UIAlert, UIShortItemComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class UIModule {}
