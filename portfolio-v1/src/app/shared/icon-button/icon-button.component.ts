import { Component, Input, OnInit } from '@angular/core';
import {
  IconDefinition,
  faArrowRight,
  faFileArrowDown,
  faPaperPlane,
  faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() color = 'primary';
  @Input() display = 'inline';
  @Input() icon = 'more';
  @Input() animate = 'hop';

  actualIcon!: IconDefinition;
  isIconVisible = true;

  // Ripple Effect
  centered = false;
  disabled = false;
  unbounded = false;
  radius!: number;

  constructor() {}

  ngOnInit(): void {
    this.setIcon();
    this.setAnimation();
  }


  // Sets the icon to be used
  setIcon() {
    this.isIconVisible = true;
    if (this.icon === 'more') {
      this.actualIcon = faArrowRight;
    } else if (this.icon === 'download') {
      this.actualIcon = faFileArrowDown;
    } else if (this.icon === 'send') {
      this.actualIcon = faPaperPlane;
    } else if (this.icon === 'logout') {
      this.actualIcon = faArrowRightFromBracket;
    } else if(this.icon === 'none') {
      this.isIconVisible = false;
      this.actualIcon = faArrowRight;
    } else {
      this.isIconVisible = false;
      this.actualIcon = faArrowRight;
    }
  }

  // Set the hover animation to be used
  setAnimation() {

  }
}
