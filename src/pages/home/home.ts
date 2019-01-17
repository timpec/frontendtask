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

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ngOnInit() {
    this.loadItems();
  };

  loadItems() {
    return this.http.get<Pic[]>(
      "../../assets/json/test.json").subscribe(
      (data) => {
        this.picArray = data;
    },
      (error) => {console.log(error)
      });
    console.log(this.picArray)
  }
}

