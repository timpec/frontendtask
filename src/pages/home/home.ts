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
  mediaArray: Observable<Pic[]>;
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
       /*
    this.mediaProvider.getAllMedia().subscribe((data: Pic[]) => {
      console.log('data', data);

      this.picArray = data.map((pic: Pic) =>{
        const nameArray = pic.filename.split('.');
        console.log(nameArray);
        pic.thumbnails = {
          160: nameArray[0] + '-tn160.png',
        };
        console.log("pic", pic);
        return pic;  
      });
     
     data.forEach((pic: Pic) => {
       //add files to pic array
       this.mediaProvider.getSingleMedia(pic.file_id).
       subscribe((file: Pic) =>{
        this.picArray.push(file);
       });
     });
    });
*/
 
  }


  loadItems() {
    return this.http.get<Pic[]>(this.url + "/media");
  }
}

