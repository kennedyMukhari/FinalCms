import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { SlistService } from '../slist.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  ngOnInit()
  {
    
  }
  constructor(public router:Router,
    public shopping:SlistService,public modal:ModalController) {
      let x =this.shopping.getshotelkey();
      console.log("edit =",x)
  }

hotel:Hotel = this.shopping.gethoteldata();

  
  closemod()
  {
   // const loading = this.loadingController.create({
   //   duration: 5000
  //  });
  //   loading.present();
 //   this.view.dismiss();
  }

  next()
{

 // const alert =  this.alertCtrl.create({
  //  title:'Action not allowed!',
  //  message: 'Page intended to serve as a template.',
   // buttons: ['OK']
 // });

 //  alert.present();
}

showmodal3(hotel)
{
  //this.shopping.setshotelkey(hotel.key);
//const mymodal = this.modal.create(Modal3Page);
//mymodal.present();

}

save(hotel)
{
 // console.log(hotel);
  this.shopping.edithotel(hotel);
  this.router.navigate(['view-rooms']);
}
}
