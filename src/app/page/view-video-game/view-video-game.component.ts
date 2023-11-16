import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  videoGames } from 'src/app/shared/model/videoGames';

@Component({
  selector: 'app-view-video-game',
  templateUrl: './view-video-game.component.html',
  styleUrls: ['./view-video-game.component.scss'],
})
export class ViewVideoGameComponent implements OnInit {
  categories!: string[];
  @Input() videoJuegos: videoGames [] = [];
  @Input() categoriaSeleccionada: string | null = null;
  @Output() hoverChanged = new EventEmitter<videoGames>();
  mostrarCategorias: any
  ngOnInit(): void {
      console.log('categoria',this.categoriaSeleccionada)
  }


  toggleHover(videojuego: videoGames) {
    videojuego.hovered = !videojuego.hovered;
    this.hoverChanged.emit(videojuego);
  }

}
