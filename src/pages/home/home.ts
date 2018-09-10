import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  scanData : {};
  outs:any;
  options :BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }    

  scan(){
    this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

        console.log(barcodeData);
        this.scanData = barcodeData.text;
    }, (err) => {
        console.log("Error occured : " + err);
    });     
  }
}