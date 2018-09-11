import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  scanData : {};
  key:any;
  options :BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner, private storage: Storage) {
  }    
  
  scan(){
    this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        console.log(barcodeData);
        this.scanData = barcodeData;
        this.storage.set(this.storage.length.toString(), barcodeData);
    }, (err) => {
        console.log("Error occured : " + err);
    });     
  }
  
}