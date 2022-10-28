import { Component, Input, OnInit } from '@angular/core';
import {
  IconDefinition,
  faBomb,
  faThumbsUp,
  faThumbsDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'displaymessage',
  templateUrl: './displaymessage.component.html',
  styleUrls: ['./displaymessage.component.scss']
})
export class DisplaymessageComponent implements OnInit {
  @Input() messagetype = 'error';

  actualIcon!: IconDefinition;

  constructor() { }

  ngOnInit(): void {
    this.setIcon();
  }


  setIcon() {
    if (this.messagetype == 'success') {
      this.actualIcon = faThumbsUp;
    } else if (this.messagetype == 'warn') {
      this.actualIcon = faBomb;
    } else {
      // It is error
      this.actualIcon = faThumbsDown;
    }
  }
}
