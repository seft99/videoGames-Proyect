import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-similar-games',
  templateUrl: './similar-games.component.html',
  styleUrls: ['./similar-games.component.scss'],
})
export class SimilarGamesComponent {
  @Input() categoriaSeleccionada!: string;
  isConsult :boolean = true;
}
