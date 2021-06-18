import { Component, OnInit } from '@angular/core';
import { VideoplayerService } from '../service/videoplayer.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

  listUrl: String[] = [];

  constructor(private videoplayerService: VideoplayerService) { }

  ngOnInit(): void {
    this.videoplayerService.safeUrl.subscribe((safeUrl) => 
    (this.listUrl.push(safeUrl.toString())));
  }

}
