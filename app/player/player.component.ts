import { Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  myUrl;
  video: any = {id: 'wzrnuUOoFNM'};
  baseUrl = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer) {
     this.myUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
  }

}
