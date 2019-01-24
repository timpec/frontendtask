import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { User, logInResponse, registerResponse, checkResponse } from '../../interfaces/user';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {

  user: User = { username: null};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
    this.checkLogin();
  }

  checkLogin(){
    if(localStorage.getItem('token')){
      this.navCtrl.push(HomePage);
      this.mediaProvider.loggedIn = true;
    }
  }

  checkUser(){
    this.mediaProvider.check(this.user).subscribe(
      (response: checkResponse) => {
        console.log(response);
        if(response.available){
          this.register();
        }
      },
      error => {
        console.log(error);
      });
  }

  login() {
    this.mediaProvider.login(this.user).subscribe(
      (response: logInResponse) => {
        console.log(response);
        this.navCtrl.push(HomePage);
        localStorage.setItem('token', response.token)
        this.mediaProvider.loggedIn = true;
      },
      error => {
        console.log(error);
      });
  }

  register() {
    this.mediaProvider.register(this.user).subscribe(
      (response: registerResponse) => {
        console.log(response);
        this.mediaProvider.loggedIn = true;
        this.login();
      },
      error => {
        console.log(error);
      });
  }
}
