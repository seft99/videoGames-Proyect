import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { videoGames } from 'src/app/shared/model/videoGames';

@Component({
  selector: 'app-consult-video-game',
  templateUrl: './consult-video-game.component.html',
  styleUrls: ['./consult-video-game.component.scss'],
})
export class ConsultVideoGameComponent {
  constructor(private route: ActivatedRoute) {}
  mostrarPopup = false;
  imagenPopup: string = '';
  currentIndex: number = 0;

  videojuego = {
    id: 0,
    imagenes: [
      'https://www.xtrafondos.com/wallpapers/vertical/the-legend-of-zelda-breath-of-the-wild-4064.jpg',
      'https://i.pinimg.com/originals/27/b7/e1/27b7e1258e4662a226bbd3549e785bf5.jpg',
      'https://www.xtrafondos.com/descargar.php?id=4065&resolucion=3840x2042',
      'https://images6.alphacoders.com/805/805656.jpg',
      'https://i.pcmag.com/imagery/articles/06CFOYIp5AMqXzyoe2m7t1K-1.fit_lim.v1628525694.jpg',
      'https://wallpaperbat.com/img/1286500-video-game-the-legend-of-zelda-breath-of-the-wild-hd-wallpaper.jpg',
    ],
    nombre: 'The Legend of Zelda: Breath of the Wild',
    categoria: 'Aventura',
    descripcion:
      'Embárcate en una épica aventura en el vasto reino de Hyrule mientras luchas contra criaturas malévolas y descubres los secretos de este mundo abierto.',
    hovered: false,
  };
  comentarios:any = [
    {
      user:'JGgaming27615',
      comentario: 'Gran juego, me encanta la historia y los gráficos.',
      fecha: '2023-11-18',
      likes: 25,
      dislikes: 2
    },
    {
      user:'user2',
      comentario: 'No estoy seguro de la jugabilidad, podría mejorar.',
      fecha: '2023-11-17',
      likes: 10,
      dislikes: 5
    },
    {
      user:'user3',
      comentario: '¡Increíble experiencia multijugador!',
      fecha: '2023-11-16',
      likes: 35,
      dislikes: 1
    },
    {
      user:'user4',
      comentario: 'El juego tiene muchos bugs, necesitan parches urgentes.',
      fecha: '2023-11-15',
      likes: 8,
      dislikes: 12
    },
    {
      user:'user5',
      comentario: 'Me encanta la imagen del juego. ¿Dónde puedo conseguirlo?',
      fecha: '2023-11-18',
      likes: 15,
      dislikes: 3
    }
  ]

  openPopup(imagen: string) {
    this.imagenPopup = imagen;
    this.mostrarPopup = true;
  }

  closePopup() {
    this.mostrarPopup = false;
  }

}
