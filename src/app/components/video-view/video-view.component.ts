import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})

export class VideoViewComponent implements OnInit {

  @Input() currentUrl: string = "";

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
  }

  getSafeUrl():SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentUrl)
  } 

}
