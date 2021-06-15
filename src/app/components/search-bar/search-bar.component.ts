import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  url: string = ' ';


  constructor() { }

  ngOnInit(): void {
  }

  getURL() {
    const videoId = this.url.split('?v=')[1].split('&')[0];
    const embedUrl = 'HTTPS://www.youtube.com/embed/' + videoId;
  }
}
