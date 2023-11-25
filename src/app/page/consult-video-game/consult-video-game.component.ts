import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { videoGames } from 'src/app/shared/model/videoGames';
import { VideoGamesService } from 'src/app/shared/services/games/videoGames.service';
import {  FormControl } from '@angular/forms';
@Component({
  selector: 'app-consult-video-game',
  templateUrl: './consult-video-game.component.html',
  styleUrls: ['./consult-video-game.component.scss'],
})
export class ConsultVideoGameComponent implements OnInit {
  form!: FormGroup;

  constructor(private route: ActivatedRoute, private gameService: VideoGamesService, private fb : FormBuilder) {
    this.form = this.fb.group({
     comment :'',
    })
   }
   
  mostrarPopup = false;
  imagenPopup: string = '';
  currentIndex: number = 0;
  stateAddComment: boolean = false;
  videoGameId!: string;
  dataGame: any;
  idUser!: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.videoGameId = params['idVideoGame'];
      this.idUser = params['idUser']
    })
    console.log('id', this.videoGameId);
    this.updateView()
  }

  updateView() {
    this.gameService.incViewGame(this.videoGameId).subscribe((response)=>{
      console.log(response)
      this.getVideoGameId()
    })
   
  }
  getVideoGameId() {
    this.gameService.getVideoGamesById(this.videoGameId).subscribe((data) => {
      this.dataGame = data;
      console.log('evideee', this.dataGame)
    })
  }

  postComments(){
    const comment = this.form.get('comment')?.value;
    console.log('comment', comment)
    this.gameService.addComment(this.videoGameId, comment).subscribe(()=>{
      this.changeStateAddComment()
    })
  }

 
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
