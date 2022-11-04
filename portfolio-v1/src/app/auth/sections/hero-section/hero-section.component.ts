import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  downloadCVEnglish = 'https://firebasestorage.googleapis.com/v0/b/han3d-portfolio.appspot.com/o/cv_english.pdf?alt=media&token=36511d44-416d-4b3b-b72f-5e9ace6e19af';
  downloadCVGerman = 'https://firebasestorage.googleapis.com/v0/b/han3d-portfolio.appspot.com/o/cv_german.pdf?alt=media&token=36b602d7-4130-49e6-804c-42e6eeddf5ae';

  constructor() { }

  ngOnInit(): void {
  }

}
