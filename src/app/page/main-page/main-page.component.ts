import { Component, OnInit } from '@angular/core';
import { videoGames } from 'src/app/shared/model/videoGames';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit{
  categoriasUnicas: Set<string> = new Set();
  categoriaSeleccionada!: string ;
  category!:string;

ngOnInit(): void {

}

handleHoverChange(videojuego: videoGames) {
}

handleSelectCategory(category:string){
  this.category = category;
}
}
