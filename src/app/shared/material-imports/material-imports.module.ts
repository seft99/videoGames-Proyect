import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatToolbarModule,MatCardModule,MatMenuModule,MatDialogModule,MatInputModule],
  exports: [MatIconModule, MatToolbarModule,MatCardModule,MatMenuModule,MatDialogModule,MatInputModule],
})
export class MaterialImportsModule {}
