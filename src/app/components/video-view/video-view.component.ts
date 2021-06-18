import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser'
import { VideoplayerService } from '../service/videoplayer.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})

export class VideoViewComponent implements OnInit {

  currentUrl: SafeResourceUrl = '';

  constructor(private videoplayerService: VideoplayerService) { }

  ngOnInit(): void {
    this.videoplayerService.safeUrl.subscribe((safeUrl) => (this.currentUrl = safeUrl));
  }
}
