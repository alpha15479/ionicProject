import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  topic: string;
  detail: string;
  image: string;
  link: string;
  today: number = Date.now();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(public AcRoute: ActivatedRoute) { }

  ngOnInit() {
    const tmpobj = this.AcRoute.snapshot.paramMap.get('sendobj');
    const obj = JSON.parse(tmpobj);
    console.log(obj);
    this.topic = obj.topic;
    this.detail = obj.detail;
    this.image = obj.image;
    this.link = obj.link;
  }

}
