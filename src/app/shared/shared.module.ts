import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ListComponent, SidebarComponent, ButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListComponent, SidebarComponent, ButtonComponent],
})
export class SharedModule {}
