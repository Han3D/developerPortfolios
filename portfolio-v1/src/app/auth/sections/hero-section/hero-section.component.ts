import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  downloadCVEnglish = 'https://firebasestorage.googleapis.com/v0/b/han3d-portfolio.appspot.com/o/cv_english.pdf?alt=media&token=514bbd32-bf35-4046-8957-fccaf8c960c9';
  downloadCVGerman = 'https://firebasestorage.googleapis.com/v0/b/han3d-portfolio.appspot.com/o/cv_german.pdf?alt=media&token=7d738336-865a-4d48-94d6-1abc9f00f93a';

  constructor() { }

  ngOnInit(): void {
  }

}
