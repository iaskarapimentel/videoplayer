import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() urlEvent = new EventEmitter<string>();

  url: string = ' ';
  
  constructor() { }

  ngOnInit(): void {
  }

  getURL() {
    const videoId = this.url.split('?v=')[1].split('&')[0];
    const embedUrl = 'https://www.youtube.com/embed/' + videoId;
    this.urlEvent.emit(embedUrl);
    // this.videoService.playVideo(embedUrl);
  }
}
