import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from 'src/app/ui/ui.module';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';

@NgModule({
  imports: [CommonModule, StaffRoutingModule, UIModule],
  declarations: [StaffComponent],
})
export class StaffModule {}
