import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  // templateUrl: 'home.html'
  template: `<ion-header>
  <ion-navbar>
   <button ion-button icon-only menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>

     <ion-title>
        Ionic App
     </ion-title>

  </ion-navbar>
</ion-header>

<ion-content padding>
  <p>Hello World</p>
</ion-content>
`
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    @ViewChild('myNav') nav: NavController
    public rootPage: any = TabsPage;
  
    // Wait for the components in MyApp's template to be initialized
    // In this case, we are waiting for the Nav with reference variable of "#myNav"
    ngOnInit() {
       // Let's navigate from TabsPage to Page1
       this.nav.push(Page1);
    }
  }

