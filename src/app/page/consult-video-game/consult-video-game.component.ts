import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { videoGames } from 'src/app/shared/model/videoGames';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-consult-video-game',
  templateUrl: './consult-video-game.component.html',
  styleUrls: ['./consult-video-game.component.scss'],
})
export class ConsultVideoGameComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serviceVideoGames: ApiService,
    private elementReft: ElementRef
  ) {}
  mostrarPopup = false;
  imagenPopup: string = '';
  currentIndex: number = 0;
  game!: videoGames;
  id!: number;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      this.id = parseInt(idString, 10);
      this.getVideoGameById(this.id);
    }
  }

  getVideoGameById(idGame: number) {

    this.serviceVideoGames.getGameById(idGame).subscribe((data) => {
      this.game = data;
      const div: HTMLElement =
        this.elementReft.nativeElement.querySelector('#video');
      div.innerHTML = this.game.video;
      this.updateNumVistas(this.game);

      console.log('game',this.game);
    });
  }

  updateNumVistas(videoGame: videoGames) {
    videoGame.numVistas = (videoGame.numVistas || 0) + 1; // Aumentamos el número de vistas
    this.serviceVideoGames.updateNumVistas(videoGame).subscribe(() => {

    }, (error) => {

    });
  }


  comentarios: any = [
    {
      user: 'JGgaming27615',
      comentario: 'Gran juego, me encanta la historia y los gráficos.',
      fecha: '2023-11-18',
      likes: 25,
      dislikes: 2,
    },
    {
      user: 'user2',
      comentario: 'No estoy seguro de la jugabilidad, podría mejorar.',
      fecha: '2023-11-17',
      likes: 10,
      dislikes: 5,
    },
    {
      user: 'user3',
      comentario: '¡Increíble experiencia multijugador!',
      fecha: '2023-11-16',
      likes: 35,
      dislikes: 1,
    },
    {
      user: 'user4',
      comentario: 'El juego tiene muchos bugs, necesitan parches urgentes.',
      fecha: '2023-11-15',
      likes: 8,
      dislikes: 12,
    },
    {
      user: 'user5',
      comentario: 'Me encanta la imagen del juego. ¿Dónde puedo conseguirlo?',
      fecha: '2023-11-18',
      likes: 15,
      dislikes: 3,
    },
  ];

  openPopup(imagen: string) {
    this.imagenPopup = imagen;
    this.mostrarPopup = true;
  }

  closePopup() {
    this.mostrarPopup = false;
  }
}
