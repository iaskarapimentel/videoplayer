import { Component, OnInit } from '@angular/core';
import { VideoplayerService } from '../service/videoplayer.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

  listUrl: String[] = [];
  videoRoot: String = 'https://www.youtube.com/embed/'

  constructor(private videoplayerService: VideoplayerService) { }

  ngOnInit(): void {
    this.updateList();  
    this.videoplayerService.videoId.subscribe((videoId) =>  {
    this.updateList();      
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
    this.listUrl = archive.filter(item => item.type === 'history').map(x =>   this.videoRoot + x.id) 
  }

  setFromHistory(url:String) {
    const videoId = url.split('embed/')[1];
    this.videoplayerService.setUrl(videoId.toString(), 'history');
  }
}
