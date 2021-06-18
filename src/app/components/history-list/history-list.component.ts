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
    this.videoplayerService.videoId.subscribe((videoId) =>  {
      if( videoId !== '') {
        this.listUrl.push(this.videoRoot + videoId);
      } 
    }); 
  }

  getURL(url:String) {
    const videoId = url.split('embed/')[1];
    this.videoplayerService.setUrl(videoId);
  }
}
