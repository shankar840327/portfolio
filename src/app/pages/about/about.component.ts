import { Component } from '@angular/core';
import {trigger,style,transition,animate} from '@angular/animations'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  animations:[
    trigger('fadeIN',[
      transition(':enter',[
        style({ opacity: 0, transform: 'translateY(20px)' }),animate('600ms ease-out', style({ opacity: 1, transform: 'none' })),
      ])
    ])
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
