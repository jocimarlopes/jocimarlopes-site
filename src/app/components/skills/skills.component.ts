import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {

  languages_frameworks = [
    {name: 'Python', value: 0.9},
    {name: 'JavaScript', value: 0.85},
    {name: 'Ionic', value: 0.95},
    {name: 'Angular', value: 0.88},
    {name: 'React Native', value: 0.8},
    {name: 'Cordova', value: 0.89},
    {name: 'Capacitor', value: 0.85},
  ]

  softwares = [
    {name: 'Linux', value: 0.98},
    {name: 'GIT', value: 0.9},
    {name: 'CLI', value: 0.95},
    {name: 'Windows', value: 0.8},
    {name: 'VS Code', value: 0.86},
    {name: 'Amazon Web Services', value: 0.7},
    {name: 'Google Services', value: 0.7},
  ]

  constructor() { }

  ngOnInit() {
  }

}
