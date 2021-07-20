import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PhotoService } from '../services/photoservice.service';

@Component({
  selector: 'app-photodetails',
  templateUrl: './photodetails.page.html',
  styleUrls: ['./photodetails.page.scss'],
})
export class PhotodetailsPage implements OnInit {
  @ViewChild('guideStepSlide') guideStepSlides: IonSlides;

  SelectedImage;

  AllPhotos: any[]; // holds all photos
  photoSub: Subscription;


  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }

  constructor(private route: ActivatedRoute, private PhotoService: PhotoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: any) => {
      const imageID = res.params.id;
      console.log(imageID)
      // find image by id
      this.SelectedImage = imageID;

      // fetch images
      this.photoSub = this.PhotoService.getImages().subscribe((res: any) => {
        const { pugs } = res;
        this.AllPhotos = pugs;
        this.guideStepSlides.slideTo(imageID)
      })
    })


  }
}
