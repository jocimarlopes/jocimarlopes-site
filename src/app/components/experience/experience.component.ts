import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

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
