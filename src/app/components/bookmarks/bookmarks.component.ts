import { Component, OnInit } from '@angular/core';
import { VideoplayerService } from '../service/videoplayer.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})

export class BookmarksComponent implements OnInit {

  currentUrl: String = '';
  listUrl: String[] = [];
  videoRoot: String = 'https://www.youtube.com/embed/'

  constructor(private videoplayerService: VideoplayerService) { }

  ngOnInit(): void {
    this.videoplayerService.videoId.subscribe((videoId) =>  {
      if( videoId !== '') {
        this.currentUrl = this.videoRoot + videoId;
      } 
    }); 
  }

  addToBookmark() {
    this.listUrl.push(this.currentUrl)
    console.log(this.listUrl)
  }
}
