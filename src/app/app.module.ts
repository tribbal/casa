
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LojaPage } from '../pages/loja/loja' ;
import { ArqListaPage  } from '../pages/arq-lista/arq-lista' ;
import { ArquitetoPage } from '../pages/arquiteto/arquiteto' ;
import { PostPage } from './../pages/post/post';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
   HomePage,
    TabsPage ,
    LojaPage ,
    ArqListaPage ,
    ArquitetoPage ,
     PostPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage ,
    LojaPage ,
    ArqListaPage ,
    ArquitetoPage ,
     PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
