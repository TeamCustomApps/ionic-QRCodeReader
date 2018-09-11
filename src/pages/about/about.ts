import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items: any[];

  constructor(public navCtrl: NavController,  private storage: Storage) {
    this.items = [];
    this.initializeItems();
  }
  initializeItems(){
    this.storage.forEach( (value, key, index) => {
      console.log("value", value);
      console.log("key", key);
      console.log("Index", index);

      this.items.push({
        value: value,
        key: key,
        index: index
      });
    })
  }
  getItems(ev:any){
    const val  = ev.target.value;
   // alert("VALUE: " + val);
    this.items = [];
    this.initializeItems();

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.text.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
