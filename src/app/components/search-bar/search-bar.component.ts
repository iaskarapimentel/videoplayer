import { Component, OnInit } from '@angular/core';
import { VideoplayerService } from '../service/videoplayer.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  url: string = ' ';
  
  constructor(private videoplayerService: VideoplayerService) { }

  ngOnInit(): void {
  }

  getURL() {
    const videoId = this.url.split('?v=')[1].split('&')[0];
    this.videoplayerService.setUrl(videoId, 'history');
  }
}
