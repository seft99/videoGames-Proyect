import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { videoGames } from 'src/app/shared/model/videoGames';

@Component({
  selector: 'app-view-video-game',
  templateUrl: './view-video-game.component.html',
  styleUrls: ['./view-video-game.component.scss'],
})
export class ViewVideoGameComponent implements OnInit {
  @Input() videoJuegos: any;
  userId!: string;
  @Output() hoverChanged = new EventEmitter<videoGames>();


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    })
 console.log('idUsuario', this.userId)
    
  }

  toggleHover(videojuego: videoGames) {
    videojuego.hovered = !videojuego.hovered;
    this.hoverChanged.emit(videojuego);
  }

  navigateToConsultVideoGame(id: string) {
    this.router.navigate(['/consultVideoGame',this.userId, id]);
  }

  aumentarVistas() {
    this.videoJuegos
  }
}
