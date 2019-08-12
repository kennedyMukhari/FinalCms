import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController, AlertController, ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { SlistService } from '../slist.service';
import { Observable } from 'rxjs';
import { Item } from '../shopping-item.interface';
import { Hotel } from '../hotel';
import { Profile } from '../user';
import { Shotel } from '../shotel';
import 'rxjs/add/operator/map';
import { User } from '../luser';
import * as firebase from 'firebase';
import { CREDENTIALS } from '../credentials';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
 
  constructor( 

    public navCtrl: NavController, 
    public lsname:SlistService,
    public alertCrtl: AlertController,
    public toastCtrl:ToastController,public loadingController:LoadingController,
    private router:Router,
    private menu: MenuController
    ) {
     // firebase.initializeApp(CREDENTIALS);
  }

  user = {} as User;

  fun(user:User)
{
  
console.log(user)
firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(result => {

  console.log(result.user.uid,result.user.email,'user logged in');
  this.lsname.bless(result.user.uid);
  console.log("navigate")
  
  if(result.user.uid >"")
  {
    
    this.router.navigate(['view-rooms']);

if(result.additionalUserInfo.isNewUser==true)
{
  // this.navCtrl.push(ProfilePage); 
}

else
{
  this.router.navigate(['view-rooms']);
}
  }
{

}
}).catch((error) => {
 
  let errorCode = error.code;
  let errorMessage = error.message;

  })
 
 
}
  ionViewDidEnter() {
    this.menu.enable(false);
  }
  ionViewWillLeave() {
    this.menu.enable(true);
  }
}



