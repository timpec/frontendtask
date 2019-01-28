import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Pic } from '../../interfaces/pic';
import { MediaProvider } from '../../providers/media/media';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  picArray: Pic[] = [];
  mediaArray: Observable<Pic[]>
  url = "https://media.mw.metropolia.fi/wbma/uploads/";
  
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public mediaProvider: MediaProvider) {
  }

  ngOnInit() {
    this.getAllFiles();
  };

  getAllFiles(){
    this.mediaArray = this.mediaProvider.getAllMedia();
    console.log(this.mediaArray);
 
  }

  /*
  getAllFiles2(){
    this.picArray2 = this.mediaProvider.getAllMedia();
    console.log(this.picArray2);
  }
  */

  loadItems() {
    return this.http.get<Pic[]>(this.url + "/media");
  }
}

