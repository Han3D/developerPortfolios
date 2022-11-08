import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  downloadCVEnglish = 'https://firebasestorage.googleapis.com/v0/b/han3d-portfolio.appspot.com/o/cv_english.pdf?alt=media&token=cdcdeb5f-cf29-4e8f-96e2-53ec02c04137';
  downloadCVGerman = 'https://firebasestorage.googleapis.com/v0/b/han3d-portfolio.appspot.com/o/cv_german.pdf?alt=media&token=532b0170-90fc-4598-9d03-27bd3d451d05';

  constructor() { }

  ngOnInit(): void {
  }

}
