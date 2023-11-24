import { Component, OnInit } from '@angular/core';
import { videoGames } from 'src/app/shared/model/videoGames';
import { VideoGamesService } from 'src/app/shared/services/games/videoGames.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  categoriasUnicas: Set<string> = new Set();
  categoriaSeleccionada!: string ;
  dataGames!: videoGames;
  constructor(private gameService: VideoGamesService ) {
    //this.filtrarCategoriasUnicas();
  }

/*private filtrarCategoriasUnicas() {
  this.videojuegos.forEach((videojuego) => {
    if (!this.categoriasUnicas.has(videojuego.categoria)) {
      this.categoriasUnicas.add(videojuego.categoria);
    }
  });
}*/

ngOnInit(): void {
  this.getVideoGames();
}

getVideoGames(): void{
  this.gameService.getVideoGames().subscribe((data)=>{
    this.dataGames = data;

  });
}


saveCategorie(categorias: string){
    this.categoriaSeleccionada = categorias;
}

handleHoverChange(dataGames: videoGames) {
  // Maneja el cambio de estado aquí (puedes hacer lo que necesites con videojuego)

}
}
