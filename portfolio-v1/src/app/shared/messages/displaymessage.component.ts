import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'displaymessage',
  templateUrl: './displaymessage.component.html',
  styleUrls: ['./displaymessage.component.scss']
})
export class DisplaymessageComponent implements OnInit {
  @Input() messagetype: string = "";
  @Input() message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
