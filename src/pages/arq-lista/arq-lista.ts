import { ArquitetoPage } from './../arquiteto/arquiteto';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ArqLista page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/



@Component({
  selector: 'page-arq-lista',
  templateUrl: 'arq-lista.html'
})
export class ArqListaPage {

  arquitetos:any = [] ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
    this.arquitetos = [   
  	          					{ nome:"Helena" , 
                            sobrenome:"Rocha" , 
                            avatar_url:"./assets/arquitetos/Helena-Rocha-avatar.jpg" ,
                            portifolio: { f1: './assets/arquitetos/Helena-Rocha-port01.jpg' ,
                                           f2: './assets/arquitetos/Helena-Rocha-port02.jpg'

                                        } ,

                            social: { face:'https://www.facebook.com/HELENAROCHAarquitetura/',
                                      insta: 'https://www.instagram.com/helenarochaarquitetura/',
                                      pin:'https://br.pinterest.com/helrocha/'
                            
                                     }  ,
                            tel:'(21)99999-9999'                   

                           } , 
                           
                        	{ nome:"Felipe" , 
                            sobrenome:"Deniz" , 
                            avatar_url:"./assets/arquitetos/FelipeDiniz-Avatar.png" ,
                            portifolio: { f1: './assets/arquitetos/FelipeDiniz_port01.jpg' ,
                                           f2: './assets/arquitetos/FelipeDiniz_port02.jpg'

                                        } ,

                                        social: { face:'https://www.facebook.com/HELENAROCHAarquitetura/',
                                      insta: 'https://www.instagram.com/helenarochaarquitetura/',
                                      pin:'https://br.pinterest.com/helrocha/'
                            
                                     }  ,
                            tel:'(21)99999-9999'

                           } ,
                            
                            { nome:"Patricia" , 
                            sobrenome:"Lima" , 
                            avatar_url:"./assets/arquitetos/PatriciaLima_avatar.jpg" ,
                            portifolio: { f1: './assets/arquitetos/FelipeDiniz_port01.jpg' ,
                                           f2: './assets/arquitetos/FelipeDiniz_port02.jpg'

                                        } ,
                                      social: { face:'https://www.facebook.com/HELENAROCHAarquitetura/',
                                      insta: 'https://www.instagram.com/helenarochaarquitetura/',
                                      pin:'https://br.pinterest.com/helrocha/'
                            
                                     }  ,
                            tel:'(21)99999-9999'

                           } ,
                            { nome:"Ferenado" , 
                            sobrenome:"Fortes" , 
                            avatar_url:"./assets/arquitetos/FernandoFortes-avatar.jpg" ,
                            portifolio: { f1: './assets/arquitetos/FelipeDiniz_port01.jpg' ,
                                           f2: './assets/arquitetos/FelipeDiniz_port02.jpg'

                                        }

                           } 

                           ,
                            { nome:"Tania" , 
                            sobrenome:"Lopes" , 
                            avatar_url:"./assets/arquitetos/Tatiana-Lopes_avatar.jpg" ,
                            portifolio: { f1: './assets/arquitetos/FelipeDiniz_port01.jpg' ,
                                           f2: './assets/arquitetos/FelipeDiniz_port02.jpg'

                                        }

                           } 

  	                             ] //end objeto arquitetos
           
           

  }//end constructor 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArqListaPage');
  }

   goProfile(  arquiteto ){
        
        this.navCtrl.push( ArquitetoPage ,  { arquiteto:arquiteto }  )
  }

}//end Class
