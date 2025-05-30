import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2022 – Present',
      responsibilities: [
        'Developed and maintained Angular applications',
        'Integrated RESTful APIs and optimized UI performance',
        'Collaborated with backend team for end-to-end delivery'
      ]
    },
    // {
    //   role: 'Web Developer Intern',
    //   company: 'Startup Labs',
    //   duration: 'Jun 2021 – Dec 2021',
    //   responsibilities: [
    //     'Built responsive websites with HTML, SCSS, and JavaScript',
    //     'Worked on UI enhancements and bug fixes',
    //     'Learned Agile and Git workflows in a team environment'
    //   ]
    // }
  ];

}
