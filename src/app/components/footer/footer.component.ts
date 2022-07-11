import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  date: any = ''

  constructor() { }

  ngOnInit() {
    this.getDate()
  }

  getDate() {
    const date = new Date(Date.now())
    const d = date.toISOString().split('-')[0]
    this.date = d
  }

}
