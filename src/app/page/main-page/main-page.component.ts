import { Component, OnInit } from '@angular/core';
import { videoGames } from 'src/app/shared/model/videoGames';
import { VideoGamesService } from 'src/app/shared/services/games/videoGames.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  categoriasUnicas: string[] = [];
  categoriaSeleccionada!: string ;
  filter : boolean = false;
  dataGamesFilter : videoGames [] = [];
  dataGames: videoGames [] = [] ;
  dataUserLocalStorage : any;
  scrollPosition = 0;
  containerWidth = 400;
  constructor(private gameService: VideoGamesService ) {
   
  }

  obtenerCategoriasUnicas(): void {
    const categoriasSet = new Set<string>();

    this.dataGames.forEach((juego) => {
      // Verifica si la propiedad category es un array y agrégala al conjunto
      if (Array.isArray(juego.category)) {
        juego.category.forEach((categoria) => {
          categoriasSet.add(categoria);
        });
      }
    });

    this.categoriasUnicas = Array.from(categoriasSet);
  }

ngOnInit(): void {
  this.getVideoGames();
  this.getDataLocalStorage();
 
}

getDataLocalStorage(){
  const data = localStorage.getItem('storage');
  if(data){
    this.dataUserLocalStorage = JSON.parse(data);
    console.log(this.dataUserLocalStorage);
  }
}
getVideoGames(): void{
  this.gameService.getVideoGames().subscribe((data)=>{
    this.dataGames = data;
    console.log('data', data)
    this.obtenerCategoriasUnicas()
  });
}

clearLocalStorage(){
  localStorage.removeItem('storage');
}

saveCategorie(categoria: string){  
  this.filter = !this.filter
  this.dataGamesFilter = this.dataGames.filter((juego) => juego.category.includes(categoria));
  this.validateData()
}

validateData(){
  if(this.filter === true){
    this.dataGames = this.dataGamesFilter;
  }else{
    this.getVideoGames();
  }
}
handleHoverChange(dataGames: videoGames) {
  // Maneja el cambio de estado aquí (puedes hacer lo que necesites con videojuego)

}



scroll(direction: 'left' | 'right'): void {
  const scrollAmount = 100; // Ajusta la cantidad de desplazamiento según sea necesario

  if (direction === 'left' && this.scrollPosition < 0) {
    this.scrollPosition += scrollAmount;
  } else if (direction === 'right' && this.scrollPosition > -this.getMaxScroll()) {
    this.scrollPosition -= scrollAmount;
  }
}

getMaxScroll(): number {
  // Calcula el valor máximo de desplazamiento para evitar desplazamiento más allá del contenido
  const contentWidth = this.categoriasUnicas.length * (30 + 10); // Ancho estimado de cada categoría + espacio entre ellas
  return Math.max(contentWidth - this.containerWidth, 0);
}
}
