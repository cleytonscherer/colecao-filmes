import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  imagem_logo = './assets/resources/images/logo.png';

  copyRight = ' Copyright - Todos os direitos reservados';

  constructor() { }

  ngOnInit(): void {
  }

}
