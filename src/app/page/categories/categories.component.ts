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

export interface category{
  categoria: string;
  select?: boolean;
}
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];
  dataVideoGames!: videoGames[];
  categoriaSelect!: category;
  saveArray: category[] =[];
  @Output() saveCategories = new EventEmitter<string>();
  constructor(private serviceVideoGames: ApiService) {};


  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.serviceVideoGames.getDataVideogames().subscribe((data) => {
      this.dataVideoGames = data;

      const allCategories = this.dataVideoGames.map(videojuego => videojuego.categoria);
      this.categories = allCategories.filter((categoria, index, self) => self.indexOf(categoria) === index);
      this.categories.forEach((cat)=>{
        this.saveArray.push({ categoria : cat , select : false});
      })
    });

  }


  emitCategory(categoria: category, indice: number): void {
    if (!categoria.select) {
      this.saveArray.forEach(category  =>{
        category.select = false;
      });
      this.saveArray[indice].select = true;
      this.saveCategories.emit(categoria.categoria);
    }else{
      this.saveArray.forEach(category  =>{
        category.select = false;
      });
      this.saveCategories.emit('');
    }


  }
  
}
