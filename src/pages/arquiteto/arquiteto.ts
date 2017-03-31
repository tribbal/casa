import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Arquiteto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-arquiteto',
  templateUrl: 'arquiteto.html'
})
export class ArquitetoPage {

  arquiteto:any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

             this.arquiteto = navParams.get('arquiteto') ;
  }//end constructor


  getPotifolio(){

  }

  teste(){
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArquitetoPage');
  }

}
