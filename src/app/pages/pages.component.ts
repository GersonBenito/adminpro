import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
