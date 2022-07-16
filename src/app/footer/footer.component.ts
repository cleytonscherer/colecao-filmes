import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  logo_branco = './assets/resources/images/logo-branco.png';

  constructor() {
  }

  ngOnInit(): void {
  }

}
