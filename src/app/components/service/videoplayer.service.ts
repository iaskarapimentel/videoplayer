import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'; 


@Injectable({
  providedIn: 'root'
})
export class VideoplayerService {

  safeResource = this._sanitizer.bypassSecurityTrustResourceUrl('');
  public url = new BehaviorSubject<SafeResourceUrl>(this.safeResource);
  safeUrl = this.url.asObservable();
  public Id = new BehaviorSubject<string>('');
  videoId = this.Id.asObservable();

  constructor( private _sanitizer: DomSanitizer) {   
  }

  setUrl(urlId: string) {
    this.url.next(this._sanitizer.bypassSecurityTrustResourceUrl("//www.youtube.com/embed/" + urlId));
    this.Id.next(urlId);
  }
}
