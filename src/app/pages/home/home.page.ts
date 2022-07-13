import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  menuList = [
    {
      id: 'home',
      icon: 'home'
    },
    {
      id: 'education',
      icon: 'school'
    },
    {
      id: 'skills',
      icon: 'code-slash'
    },
    {
      id: 'experience',
      icon: 'earth'
    },
    {
      id: 'interests',
      icon: 'rocket'
    },
    {
      id: 'apps',
      icon: 'logo-android'
    },
  ]
  constructor() {}

  scrollToLabel(label) {
    let element = document.getElementById(label);
    this.content.scrollToPoint(0, element.offsetTop, 1000);
  }



}
