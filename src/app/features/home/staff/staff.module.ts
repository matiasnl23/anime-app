import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';

@NgModule({
  imports: [CommonModule, StaffRoutingModule],
  declarations: [StaffComponent],
})
export class StaffModule {}
