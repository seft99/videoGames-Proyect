import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { videoGames } from 'src/app/shared/model/videoGames';

@Component({
  selector: 'app-view-video-game',
  templateUrl: './view-video-game.component.html',
  styleUrls: ['./view-video-game.component.scss'],
})
export class ViewVideoGameComponent implements OnInit {
  @Input() videoJuegos: videoGames[] = [];
  @Output() hoverChanged = new EventEmitter<videoGames>();


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

  }

  toggleHover(videojuego: videoGames) {
    videojuego.hovered = !videojuego.hovered;
    this.hoverChanged.emit(videojuego);
  }

  navigateToConsultVideoGame(videojuego: videoGames) {
    const videojuegoId = videojuego.id;
    this.router.navigate(['/consultVideoGame', videojuegoId]);
  }

  aumentarVistas(){
    this.videoJuegos
  }
}
