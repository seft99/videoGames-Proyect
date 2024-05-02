import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { videoGames } from 'src/app/shared/model/videoGames';
import { ApiService } from 'src/app/shared/services/api.service';
export interface Videojuego {
  id: number;
  imagen: string;
  numVistas: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  hovered: boolean;
}
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];
  dataVideoGames!: videoGames[];
  categoriaSelect!: string;
  @Output() saveCategories = new EventEmitter<string>();
  constructor(private serviceVideoGames: ApiService) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.serviceVideoGames.getDataVideogames().subscribe((data) => {
      this.dataVideoGames = data;
      const allCategories = this.dataVideoGames.map(videojuego => videojuego.categoria);
      this.categories = allCategories.filter((categoria, index, self) => self.indexOf(categoria) === index);
    });
  }


  emitCategory(categoria: any) {
    if (this.categoriaSelect === categoria) {
      this.categoriaSelect = '';
    } else {
      this.categoriaSelect = categoria;
    }
    this.saveCategories.emit(this.categoriaSelect);
  }
}
