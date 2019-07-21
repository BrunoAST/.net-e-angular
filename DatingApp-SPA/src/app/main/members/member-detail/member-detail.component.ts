import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'da-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => (this.user = data.user));

    this._configureGalleryOptions();
    this._configureGalleryImages();
  }

  private _configureGalleryOptions(): void {
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
  }

  private _configureGalleryImages(): void {
    this.galleryImages = this._images;
  }

  private get _images(): string[] {
    const imageUrls = [];

    this.user.photos.forEach((image, index) => {
      imageUrls.push({
        small: this.user.photos[index].url,
        medium: this.user.photos[index].url,
        big: this.user.photos[index].url,
        description: this.user.photos[index].description
      });
    });

    return imageUrls;
  }
}
