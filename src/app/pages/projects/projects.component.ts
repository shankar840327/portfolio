import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Patient Diagnostic Platform',
      description: 'A platform connecting patients with diagnostic centers for report uploads and viewing, built with Angular, Node.js, and MongoDB.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'GridFS'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing skills, projects, and experience with animations and responsive design.',
      technologies: ['Angular', 'SCSS', 'Animations'],
      link: '#'
    }
  ];

}
