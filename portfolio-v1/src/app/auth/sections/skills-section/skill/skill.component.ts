import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('false', style({ margin: '1.5rem' })),
      state('true', style({ margin: 0 })),
      transition(
        'false => true',
        group([
          query('@showBackAnimation', [animateChild()]),
          query(':self', [
            animate(
              '1s ease',
              keyframes([
                style({
                  transform: 'perspective(400px) rotateY(0) scale(1)',
                  animationTimingFunction: 'ease-out',
                  offset: 0,
                }),
                style({
                  transform:
                    'perspective(400px) rotateY(170deg) scale(1)',
                  animationTimingFunction: 'ease-out',
                  offset: 0.4,
                }),
                style({
                  transform:
                    'perspective(400px) rotateY(190deg) scale(1)',
                  animationTimingFunction: 'ease-in',
                  offset: 0.5,
                }),
                style({
                  transform: 'perspective(400px) rotateY(360deg) scale(0.8)',
                  animationTimingFunction: 'ease-in',
                  offset: 0.8,
                }),
                style({
                  transform: 'perspective(400px) rotateY(360deg) scale(1)',
                  animationTimingFunction: 'ease-in',
                  margin: 0,
                  offset: 1,
                }),
              ])
            ),
          ]),
          
        ])
      ),
      transition(
        'true => false',
        group([
          query('@showFrontAnimation', [animateChild()]),
          query(':self', [
            animate(
              '1s ease',
              keyframes([
                style({
                  transform: 'perspective(400px) rotateY(0) scale(1)',
                  animationTimingFunction: 'ease-out',
                  offset: 0,
                }),
                style({
                  transform: 'perspective(400px) rotateY(170deg) scale(0.8)',
                  animationTimingFunction: 'ease-out',
                  offset: 0.4,
                }),
                style({
                  transform:
                    'perspective(400px) rotateY(190deg) scale(1)',
                  animationTimingFunction: 'ease-in',
                  offset: 0.5,
                }),
                style({
                  transform:
                    'perspective(400px) rotateY(360deg) scale(1)',
                  animationTimingFunction: 'ease-in',
                  offset: 0.8,
                }),
                style({
                  transform: 'perspective(400px) rotateY(360deg) scale(1)',
                  animationTimingFunction: 'ease-in',
                  offset: 1,
                }),
              ])
            ),
          ]),
        ])
      ),
    ]),
    trigger('showBackAnimation', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('1.5s ease-out', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: 0.5}),
        style({opacity: 1, offset: 1}),
      ]))),
      transition('true => false', animate('1s ease-out')),
    ]),
    trigger('showFrontAnimation', [
      state('false', style({ opacity: 1 })),
      state('true', style({ opacity: 0 })),
      transition('false => true', animate('2s ease')),
      transition('true => false', animate('1s ease-out', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 0, offset: 0.5}),
        style({opacity: 1, offset: 1}),
      ]))),
    ]),
  ],
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill = new Skill(
    'undefined',
    'undefined',
    'undefined',
    0,
    'undefined',
    "0"
  );
  @Input() isClicked: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // Check if it is a mobile device
    if (window.innerWidth > 1280) {
      VanillaTilt.init(document.querySelector('#' + this.skill.id) as any);
    }
  }
}
