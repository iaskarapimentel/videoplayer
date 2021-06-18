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
    this.updateList();
    this.videoplayerService.videoId.subscribe((videoId) =>  {
      // this.updateList();    
      if( videoId !== '') {
        this.currentUrl = this.videoRoot + videoId;
      } 
    }); 
  }

  updateList() {
    let archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;
    for (; key = keys[i]; i++) {
      const video = localStorage.getItem(key)
      archive.push(JSON.parse(video || '{}'));
    }
    this.listUrl = archive.filter(item => item.type === 'bookmark').map(x =>   this.videoRoot + x.id) 
  }

  addToBookmark() {
    const videoId = this.currentUrl.split('embed/')[1];
    if(videoId) {
      this.listUrl.push(this.currentUrl)
      var now = new Date().toLocaleString();
      const video = {
        id: videoId,
        type: 'bookmark',
      }
      localStorage.setItem(now.toString(), JSON.stringify(video));
    }
  }
}
