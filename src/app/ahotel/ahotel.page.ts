import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { SlistService } from '../slist.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ahotel',
  templateUrl: './ahotel.page.html',
  styleUrls: ['./ahotel.page.scss'],
})
export class AhotelPage implements OnInit {

  ngOnInit()
  {

  }
  constructor( public shopping:SlistService,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AhotelPage');
  }

  hotel:Hotel =
  {
      
    name:"",
    roomtype:"",
    singlep:undefined,
    doublep:0,
    kingp:0,
    queenp:0,
    discount:0,
    rating:"",
    phone:undefined,
    address:undefined,
   feature1:"",
   feature2:"",
   feature3:"",
    feature4:"",
    description:"",
    pic1:""
  
  }

 



  addhotel(hotel)
  {
    
    this.shopping.pics(hotel.pic1);
    console.log(hotel)
   
    this.shopping.addhotel(hotel);
      
      
    
      }

}

