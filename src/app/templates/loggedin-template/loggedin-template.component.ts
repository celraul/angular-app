import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-loggedin-template',
  templateUrl: './loggedin-template.component.html',
  styleUrls: ['./loggedin-template.component.scss']
})
export class LoggedInTemplateComponent implements OnInit {
  title = 'app Logado';
  collapedSideBar: boolean;

  constructor() { }

  ngOnInit() { }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}
