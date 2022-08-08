import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {

  apps = []

  constructor() { }

  ngOnInit() {
    this.apps = [
      { 
        name: 'Jogador Caro', 
        image: 'jogadorcaro.webp', 
        url: 'https://jogadorcaro.digital',
        description: 'Jogador Caro is a Brazilian social network, the idea of connecting players, teams and soccer courts.'
      },
      { 
        name: 'Eu Nunca', 
        image: 'eununca.webp', 
        url: 'https://play.google.com/store/apps/details?id=br.com.eununca',
        description: 'Eu nunca is a Brazilian Drinking Game to play with friends and enjoy.'
      },
    ]
  }

}
