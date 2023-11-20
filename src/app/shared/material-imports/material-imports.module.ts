import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatToolbarModule,MatCardModule,MatMenuModule],
  exports: [MatIconModule, MatToolbarModule,MatCardModule,MatMenuModule],
})
export class MaterialImportsModule {}
