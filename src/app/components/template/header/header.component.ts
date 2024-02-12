import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerSer: HeaderService) { }

  ngOnInit(): void {
  }
  get title(): string {
    return this.headerSer.headerdata.tittle

  }
  get icon(): string {
    return this.headerSer.headerdata.icon

  }
  get routeUrl(): string {
    return this.headerSer.headerdata.routeUrl

  }

}
