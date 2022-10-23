import { Component, OnInit } from '@angular/core';
import { faLinkedin, faTwitter, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkedIn = faLinkedin;
  twitter = faTwitter;
  github = faGithub;
  behance = faBehance;

  constructor() { }

  ngOnInit(): void {
  }

}
