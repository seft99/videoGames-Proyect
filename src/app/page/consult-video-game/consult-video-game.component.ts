import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { videoGames } from 'src/app/shared/model/videoGames';

@Component({
  selector: 'app-consult-video-game',
  templateUrl: './consult-video-game.component.html',
  styleUrls: ['./consult-video-game.component.scss'],
})
export class ConsultVideoGameComponent {
  constructor(private route: ActivatedRoute) { }
  mostrarPopup = false;
  imagenPopup: string = '';
  currentIndex: number = 0;
  stateAddComment: boolean = false;
  videojuego = { 
    id: 0,
    imagenes: [
      'https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png',
      'https://i.pinimg.com/736x/40/6d/f7/406df7cc0a0eeaf367b53705a70f2e90.jpg',
      'https://minecraft-tutos.com/wp-content/uploads/2022/03/fond-ecran-minecraft-enderman-mine-1024x576.jpeg',
      'https://c4.wallpaperflare.com/wallpaper/948/782/354/minecraft-minecraft-dungeons-ocean-view-minecraft-dungeons-hidden-depths-4k-hd-wallpaper-preview.jpg',
      'https://images7.alphacoders.com/594/594461.png',
      'https://coolwallpapers.me/picsup/379353-minecraft-images-for-backgrounds-desktop-free.jpg',
    ],
    nombre: 'The Legend of Zelda: Breath of the Wild',
    categoria: 'Aventura',
    descripcion:
      'Embárcate en una épica aventura en el vasto reino de Hyrule mientras luchas contra criaturas malévolas y descubres los secretos de este mundo abierto.',
    hovered: false,
  };
  comentarios: any = [
    {
      user: 'JGgaming27615',
      comentario: 'Gran juego, me encanta la historia y los gráficos.',
      fecha: '2023-11-18',
      likes: 25,
      dislikes: 2
    },
    {
      user: 'user2',
      comentario: 'No estoy seguro de la jugabilidad, podría mejorar.',
      fecha: '2023-11-17',
      likes: 10,
      dislikes: 5
    },
    {
      user: 'user3',
      comentario: '¡Increíble experiencia multijugador!',
      fecha: '2023-11-16',
      likes: 35,
      dislikes: 1
    },
    {
      user: 'user4',
      comentario: 'El juego tiene muchos bugs, necesitan parches urgentes.',
      fecha: '2023-11-15',
      likes: 8,
      dislikes: 12
    },
    {
      user: 'user5',
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

  changeStateAddComment() {
    this.stateAddComment = !this.stateAddComment;
  }

}
