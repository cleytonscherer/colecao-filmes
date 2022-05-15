import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  imagem_logo = './assets/resources/images/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
