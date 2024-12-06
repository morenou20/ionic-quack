import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.page.html',
  styleUrls: ['./image-detail.page.scss'],
})
export class ImageDetailPage implements OnInit {
  imageUrl: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => { // consume la url de la lista
      this.imageUrl = params['imageUrl'];
    });
  }
}