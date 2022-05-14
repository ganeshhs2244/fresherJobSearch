import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { FormsModule } from '@angular/forms';
import { MoreInfoComponent } from './more-info/more-info.component';


@NgModule({
  declarations: [JobsListComponent, MoreInfoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[JobsListComponent]
})
export class MainPageModule { }
