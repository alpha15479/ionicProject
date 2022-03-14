import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ServiceService } from '../path-to/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {

  obj: any;
  // public finalList: Observable<Final[]>;
  today: number = Date.now();
  finalList = [
    {
    topic: 'นักศึกษารหัส 62 ให้เข้าร่วมกลุ่มสหกิจมหาวิทยาลัย เพื่อติดตามข่าวสารการไปสหกิจศึกษา',
    detail: 'นักศึกษารหัส 62 ให้เข้าร่วมกลุ่มสหกิจมหาวิทยาลัย เพื่อติดตามข่าวสารการไปสหกิจศึกษา',
    // eslint-disable-next-line max-len
    image: 'https://i.ibb.co/8Y24zXP/REG-banner2-8.png',
    link: 'https://reg.ubu.ac.th/registrar/home.asp'
  },
  {
    topic: 'นักศึกษารหัส 62 ให้เข้าร่วมกลุ่มสหกิจมหาวิทยาลัย เพื่อติดตามข่าวสารการไปสหกิจศึกษา',
    detail: 'นักศึกษารหัส 62 ให้เข้าร่วมกลุ่มสหกิจมหาวิทยาลัย เพื่อติดตามข่าวสารการไปสหกิจศึกษา',
    // eslint-disable-next-line max-len
    image: 'https://i.ibb.co/N3TZzMj/REG-banner2-4.png',
    link: 'https://reg.ubu.ac.th/registrar/home.asp'
  },
  {
    topic: 'นักศึกษารหัส 62 ให้เข้าร่วมกลุ่มสหกิจมหาวิทยาลัย เพื่อติดตามข่าวสารการไปสหกิจศึกษา',
    detail: 'นักศึกษารหัส 62 ให้เข้าร่วมกลุ่มสหกิจมหาวิทยาลัย เพื่อติดตามข่าวสารการไปสหกิจศึกษา',
    // eslint-disable-next-line max-len
    image: 'https://i.ibb.co/t8MnskC/REG-banner3.png',
    link: 'https://reg.ubu.ac.th/registrar/home.asp'
  },
  ];

  constructor(
    public route: Router, public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    // this.finalList = this.firestoreService.getList();
  }

  showinfo(tmpitem: any) {
    const data = JSON.stringify(tmpitem);
    this.route.navigate(['show',data]);
  }

  async presentPromptEdit(tmp) {
    const alert = this.alertCtrl.create({
      header: 'Edit Product',
      inputs: [
        {
          name: 'topic',
          placeholder: 'Topic',
          value: tmp.topic
        },
        {
          name: 'detail',
          placeholder: 'detail',
          value: tmp.detail,
        },
        {
          name: 'image',
          placeholder: 'image',
          value: tmp.image
        },
        {
          name: 'link',
          placeholder: 'link',
          value: tmp.link,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < this.finalList.length; i++) {
              if (this.finalList[i] === tmp) {
                this.finalList[i].topic = data.topic;
                this.finalList[i].detail = data.detail;
                this.finalList[i].image = data.image;
                this.finalList[i].link = data.link;
              }
            }
          }
        }
      ]
    });
    (await alert).present();
  }


}

