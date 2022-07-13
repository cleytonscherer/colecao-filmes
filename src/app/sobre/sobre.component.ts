import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  logo = './assets/resources/images/logo.png';

  utfpr01 = './assets/resources/images/utfpr01.png';

  constructor() { }

  ngOnInit(): void {
  }

}
