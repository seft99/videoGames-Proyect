import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  @Input() isConsult: boolean = false;
  changeID: boolean = false;
  backID!: string;
  id!: string;
  @ViewChild('windowRef') windowRef!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servideVideoGames: ApiService
  ) {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      this.id = idString;
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.url);
      }
    });
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
    this.servideVideoGames
      .getGamesByCategory(this.categoriaSeleccionada)
      .subscribe((data) => {
        this.videoJuegos = data;

        if (this.isConsult) {
          const index = this.videoJuegos.findIndex(
            (game) => game.id === this.id
          );
          this.videoJuegos.splice(index, 1);
          console.log('gamee', index);
        }
      });
  }
  checkRoute(url: string) {
    const urlSegments = url.split('/');
    this.changeID = urlSegments[urlSegments.length - 1] !== this.backID;
    if(this.changeID) {
      window.location.reload();
      window.scrollTo(0, 0);
    }
  }
  toggleHover(videojuego: videoGames) {
    videojuego.hovered = !videojuego.hovered;
    this.hoverChanged.emit(videojuego);
  }

  navigateToConsultVideoGame(videojuego: videoGames) {
    const videojuegoId = videojuego.id;
    this.backID = this.id;
    this.router.navigate(['/consultVideoGame', videojuegoId]);
  }

  aumentarVistas() {
    this.videoJuegos;
  }
}
