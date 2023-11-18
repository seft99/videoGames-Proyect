import { Component } from '@angular/core';
import { videoGames } from 'src/app/shared/model/videoGames';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  categoriasUnicas: Set<string> = new Set();
  categoriaSeleccionada!: string ;
  constructor() {
    this.filtrarCategoriasUnicas();
  }
  videojuegos: videoGames[] = [
    {
      id:0,
      imagen: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
      nombre: "The Legend of Zelda: Breath of the Wild",
      categoria: "Aventura",
      descripcion: "Embárcate en una épica aventura en el vasto reino de Hyrule mientras luchas contra criaturas malévolas y descubres los secretos de este mundo abierto.",
      hovered: false,
    },
    {
      id:1,
      imagen: "https://areajugones.sport.es/wp-content/uploads/2022/07/edicion-estandar-fifa-23-mbape-vertical.jpg",
      nombre: "FIFA 23",
      categoria: "Deportes",
      descripcion: "Experimenta la emoción del fútbol con gráficos realistas, modos de juego emocionantes y la posibilidad de llevar a tu equipo a la gloria en torneos internacionales.",
      hovered: false,
    },
    {
      id:2,
      imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/04/caratula-assassins-creed-valhalla-1931677.jpg?tf=1200x",
      nombre: "Assassin's Creed Valhalla",
      categoria: "Acción/Aventura",
      descripcion: "Sumérgete en la era vikinga mientras lideras a tu clan en incursiones épicas, construyes tu asentamiento y enfrentas desafíos para asegurar un lugar en Valhalla.",
      hovered: false,
    },
    {
      id:3,
      imagen: "https://cdn.atomix.vg/wp-content/uploads/2017/10/review-rese%C3%B1a-super-mario-odyssey.jpg",
      nombre: "Super Mario Odyssey",
      categoria: "Plataformas",
      descripcion: "Acompaña a Mario en un viaje por diversos reinos para rescatar a la princesa Peach de Bowser. Utiliza el sombrero mágico, Cappy, para tomar el control de diferentes personajes y objetos.",
      hovered: false,
    },
    {
      id:4,
      imagen: "https://m.media-amazon.com/images/M/MV5BMGU4ODVkZDYtYjNiNS00YmFiLWFmOWQtODM2NDRjZDAxNzliXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_FMjpg_UX1000_.jpg",
      nombre: "Cyberpunk 2077",
      categoria: "RPG",
      descripcion: "Explora Night City, un vasto mundo abierto futurista, mientras asumes el papel de V, un mercenario en busca de inmortalidad. Enfrenta decisiones morales y consecuencias impactantes.",
      hovered: false,
    },
    {
      id:5,
      imagen: "https://m.media-amazon.com/images/M/MV5BMDNkZDVkODEtNjQyYy00NGYwLTljMGQtOTI2MDAwY2ZlOWFmXkEyXkFqcGdeQXVyNjM2MTY3MTY@._V1_.jpg",
      nombre: "Overwatch",
      categoria: "FPS",
      descripcion: "Únete a un equipo de héroes con habilidades únicas y participa en intensos combates en línea. Trabaja en equipo para cumplir objetivos y asegurar la victoria en este shooter competitivo.",
      hovered: false,
    },
    {
      id:6,
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      nombre: "The Witcher 3: Wild Hunt",
      categoria: "RPG",
      descripcion: "Embárcate en una búsqueda épica como Geralt de Rivia, cazador de monstruos. Explora un mundo abierto lleno de historias intrigantes, criaturas místicas y decisiones morales impactantes.",
      hovered: false,
    },
    {  id:7,
      imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
      nombre: "Minecraft",
      categoria: "Sandbox",
      descripcion: "Construye tu propio mundo en este juego de sandbox. Explora, mina recursos, construye estructuras y enfréntate a peligros en un mundo pixelado lleno de posibilidades.",
      hovered: false,
    },
    {
      id:8,
      imagen: "https://m.media-amazon.com/images/M/MV5BMGU4ODVkZDYtYjNiNS00YmFiLWFmOWQtODM2NDRjZDAxNzliXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_FMjpg_UX1000_.jpg",
      nombre: "Cyberpunk 2077",
      categoria: "RPG",
      descripcion: "Explora Night City, un vasto mundo abierto futurista, mientras asumes el papel de V, un mercenario en busca de inmortalidad. Enfrenta decisiones morales y consecuencias impactantes.",
      hovered: false,
    },
    {
      id:9,
      imagen: "https://m.media-amazon.com/images/M/MV5BMDNkZDVkODEtNjQyYy00NGYwLTljMGQtOTI2MDAwY2ZlOWFmXkEyXkFqcGdeQXVyNjM2MTY3MTY@._V1_.jpg",
      nombre: "Overwatch",
      categoria: "FPS",
      descripcion: "Únete a un equipo de héroes con habilidades únicas y participa en intensos combates en línea. Trabaja en equipo para cumplir objetivos y asegurar la victoria en este shooter competitivo.",
      hovered: false,
    },
    {
      id:10,
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      nombre: "The Witcher 3: Wild Hunt",
      categoria: "RPG",
      descripcion: "Embárcate en una búsqueda épica como Geralt de Rivia, cazador de monstruos. Explora un mundo abierto lleno de historias intrigantes, criaturas místicas y decisiones morales impactantes.",
      hovered: false,
    },
    {
      id:11,
      imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
      nombre: "Minecraft",
      categoria: "Sandbox",
      descripcion: "Construye tu propio mundo en este juego de sandbox. Explora, mina recursos, construye estructuras y enfréntate a peligros en un mundo pixelado lleno de posibilidades.",
      hovered: false,
    },
    {
      id:12,
      imagen: "https://m.media-amazon.com/images/M/MV5BMGU4ODVkZDYtYjNiNS00YmFiLWFmOWQtODM2NDRjZDAxNzliXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_FMjpg_UX1000_.jpg",
      nombre: "Cyberpunk 2077",
      categoria: "RPG",
      descripcion: "Explora Night City, un vasto mundo abierto futurista, mientras asumes el papel de V, un mercenario en busca de inmortalidad. Enfrenta decisiones morales y consecuencias impactantes.",
      hovered: false,
    },
    {
      id:13,
      imagen: "https://m.media-amazon.com/images/M/MV5BMDNkZDVkODEtNjQyYy00NGYwLTljMGQtOTI2MDAwY2ZlOWFmXkEyXkFqcGdeQXVyNjM2MTY3MTY@._V1_.jpg",
      nombre: "Overwatch",
      categoria: "FPS",
      descripcion: "Únete a un equipo de héroes con habilidades únicas y participa en intensos combates en línea. Trabaja en equipo para cumplir objetivos y asegurar la victoria en este shooter competitivo.",
      hovered: false,
    },
    {
      id:14,
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      nombre: "The Witcher 3: Wild Hunt",
      categoria: "RPG",
      descripcion: "Embárcate en una búsqueda épica como Geralt de Rivia, cazador de monstruos. Explora un mundo abierto lleno de historias intrigantes, criaturas místicas y decisiones morales impactantes.",
      hovered: false,
    },
    {
      id:15,
      imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
      nombre: "Minecraft",
      categoria: "Sandbox",
      descripcion: "Construye tu propio mundo en este juego de sandbox. Explora, mina recursos, construye estructuras y enfréntate a peligros en un mundo pixelado lleno de posibilidades.",
      hovered: false,
    },
    {
      id:16,
      imagen: "https://m.media-amazon.com/images/M/MV5BMGU4ODVkZDYtYjNiNS00YmFiLWFmOWQtODM2NDRjZDAxNzliXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_FMjpg_UX1000_.jpg",
      nombre: "Cyberpunk 2077",
      categoria: "RPG",
      descripcion: "Explora Night City, un vasto mundo abierto futurista, mientras asumes el papel de V, un mercenario en busca de inmortalidad. Enfrenta decisiones morales y consecuencias impactantes.",
      hovered: false,
    },
    {
      id:17,
      imagen: "https://m.media-amazon.com/images/M/MV5BMDNkZDVkODEtNjQyYy00NGYwLTljMGQtOTI2MDAwY2ZlOWFmXkEyXkFqcGdeQXVyNjM2MTY3MTY@._V1_.jpg",
      nombre: "Overwatch",
      categoria: "FPS",
      descripcion: "Únete a un equipo de héroes con habilidades únicas y participa en intensos combates en línea. Trabaja en equipo para cumplir objetivos y asegurar la victoria en este shooter competitivo.",
      hovered: false,
    },
    {
      id:18,
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
      nombre: "The Witcher 3: Wild Hunt",
      categoria: "RPG",
      descripcion: "Embárcate en una búsqueda épica como Geralt de Rivia, cazador de monstruos. Explora un mundo abierto lleno de historias intrigantes, criaturas místicas y decisiones morales impactantes.",
      hovered: false,
    },
    {
      id:19,
      imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
      nombre: "Minecraft",
      categoria: "Sandbox",
      descripcion: "Construye tu propio mundo en este juego de sandbox. Explora, mina recursos, construye estructuras y enfréntate a peligros en un mundo pixelado lleno de posibilidades.",
      hovered: false,
    },
];

private filtrarCategoriasUnicas() {
  this.videojuegos.forEach((videojuego) => {
    if (!this.categoriasUnicas.has(videojuego.categoria)) {
      this.categoriasUnicas.add(videojuego.categoria);
    }
  });
}

saveCategorie(categorias: string){
    this.categoriaSeleccionada = categorias;
}

handleHoverChange(videojuego: videoGames) {
  // Maneja el cambio de estado aquí (puedes hacer lo que necesites con videojuego)
  console.log('Hover changed:', videojuego);
}
}
