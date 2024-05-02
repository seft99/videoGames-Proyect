import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { videoGames } from 'src/app/shared/model/videoGames';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-view-video-game',
  templateUrl: './view-video-game.component.html',
  styleUrls: ['./view-video-game.component.scss'],
})
export class ViewVideoGameComponent implements OnInit {
  videoJuegos: videoGames[] = [];
  @Output() hoverChanged = new EventEmitter<videoGames>();
  @Input() categoriaSeleccionada!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servideVideoGames: ApiService
  ) {}

  ngOnInit(): void {
    this.getVideoGames();
  }

  ngOnChanges(): void {
    this.getVideoGames();
  }

  getVideoGames() {
    if (!this.categoriaSeleccionada) {
      this.servideVideoGames.getDataVideogames().subscribe((data) => {
        this.videoJuegos = data;
      });
    } else {
      this.filtroCategory();
    }
  }

  filtroCategory() {
    this.servideVideoGames.getGamesByCategory(this.categoriaSeleccionada).subscribe((data) => {
      this.videoJuegos = data;
    });
  }

  toggleHover(videojuego: videoGames) {
    videojuego.hovered = !videojuego.hovered;
    this.hoverChanged.emit(videojuego);
  }

  navigateToConsultVideoGame(videojuego: videoGames) {
    const videojuegoId = videojuego.id;
    this.router.navigate(['/consultVideoGame', videojuegoId]);
  }

  aumentarVistas() {
    this.videoJuegos;
  }


}
