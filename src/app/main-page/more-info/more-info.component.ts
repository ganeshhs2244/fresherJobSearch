import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {

  showMore:boolean;
  toggleBtn:String;
  constructor() {
    this.showMore=false;
    this.toggleBtn='show more'
   }

  ngOnInit() {
  }
  onshowmore()
  {
    if( this.showMore==false)
    {
      this.showMore=true;
      this.toggleBtn='show less'
    }else{
      this.showMore=false;
      this.toggleBtn='show more'
    }
    
  }

}
