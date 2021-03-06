//import * as $ from 'jquery';
import * as M from 'materialize-css';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('mobile') sideNav?: ElementRef;

  ngAfterViewInit(): void {
    //let $sideNav = $('#mobile-demo');
    //M.Sidenav.init($sideNav);
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
