import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Pic } from '../../interfaces/pic';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  picArray: Pic[];

  url = "https://media.mw.metropolia.fi/wbma/uploads/";
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ngOnInit() {
    this.loadItems();
  };

  loadItems() {
    return this.http.get<Pic[]>("https://media.mw.metropolia.fi/wbma/media").subscribe(
      (data) => {
        this.picArray = data;
    },
      (error) => {console.log(error)
      });
  }
}

