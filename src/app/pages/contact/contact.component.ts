import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shankar840327',
      icon: 'assets/icons/github.svg'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ravishankarvadduri',
      icon: 'assets/icons/linkedin.svg'
    },
    {
      name: 'Email',
      url: 'mailto:ravishankarvadduri@gmail.com',
      icon: 'assets/icons/envelope-regular.svg'
    }
  ];

}
