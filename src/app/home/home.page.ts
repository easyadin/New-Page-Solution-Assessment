import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PhotoService } from '../services/photoservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  constructor(private PhotoService: PhotoService, private Platform: Platform) { }

  AllPhotos: any[]; // holds all photos
  displayPhotos: any[];

  photoSub: Subscription;

  displayLimit = this.Platform.is('desktop') ? 20 : 5; // the maximum list of images to show at initial stage

  ngOnInit(): void {
    // fetch images
    this.photoSub = this.PhotoService.getImages().subscribe((res: any) => {
      const { pugs } = res;
      this.AllPhotos = pugs;
      this.displayPhotos = this.AllPhotos.slice(0, this.displayLimit)
    })
  }


  loadData(event) {
    setTimeout(() => {
      this.displayLimit += 10;
      this.displayPhotos = this.AllPhotos.slice(0, this.displayLimit)
      event.target.complete();
      // event.target.disabled = true;

      if (this.displayPhotos.length === this.AllPhotos.length) {
        event.target.disabled = true;
      }
    }, 1000)
  }

  ngOnDestroy(): void {
    this.photoSub.unsubscribe();
  }
}
