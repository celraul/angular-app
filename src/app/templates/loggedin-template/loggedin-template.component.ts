import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-loggedin-template',
  templateUrl: './loggedin-template.component.html',
  styleUrls: ['./loggedin-template.component.scss']
})
export class LoggedInTemplateComponent implements OnInit {
  title = 'app Logado';
  collapedSideBar: boolean;

  constructor() {
    this.collapedSideBar = false;
  }

  ngOnInit() { }

  receiveCollapsed($event: any) {
    this.collapedSideBar = $event;
  }
}
