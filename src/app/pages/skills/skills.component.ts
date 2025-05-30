import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  // display-1
  // skills = [
  //   { name: 'HTML', level: 'Expert' },
  //   { name: 'CSS', level: 'Expert' },
  //   { name: 'JavaScript', level: 'Advanced' },
  //   { name: 'TypeScript', level: 'Advanced' },
  //   { name: 'Angular', level: 'Advanced' },
  //   { name: 'Node.js', level: 'Intermediate' },
  //   { name: 'MongoDB', level: 'Intermediate' },
  //   { name: 'Git', level: 'Advanced' }
  // ];

  // display-2
  skills = [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
    { name: 'JavaScript', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'Angular', level: 4 },
    { name: 'Node.js', level: 3 },
    { name: 'MongoDB', level: 3 },
    { name: 'Git', level: 4 }
  ];

  stars = Array(5).fill(0); // to use for rendering stars

}
