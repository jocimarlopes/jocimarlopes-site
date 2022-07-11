import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {

  width = window.innerWidth

  constructor(
    private platform: Platform
  ) { 
    this.resized()
  }

  ngOnInit() {
  }

  resized() {
    this.platform.resize.subscribe((res: any) => {
      this.width = window.innerWidth
    })
  }

}
