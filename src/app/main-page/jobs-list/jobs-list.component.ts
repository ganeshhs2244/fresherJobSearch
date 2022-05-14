import { Component, Input, OnInit } from "@angular/core";
import { JobListService } from "src/app/services/job-list.service";


@Component({
  selector: "app-jobs-list",
  templateUrl: "./jobs-list.component.html",
  styleUrls: ["./jobs-list.component.scss"],
})
export class JobsListComponent implements OnInit {
  cname: any;
  data: any;
  data2: any;
  btnName = "more";
  showmore: boolean = false;
  isReadMore = true;
  apidata: any;
  apidata2: any;
  mainData:any;
  constructor(private jobListService: JobListService) {}

  ngOnInit() {
    //console.log(this.jobListService.getJobList());
    this.jobListService
      .getApidata()
      .toPromise()
      .then((res) => {
        this.apidata = res;
        //console.log(this.apidata.values);
        this.getJsonArrayFromData(this.apidata.values);
      });
  }

  search() {
    console.log(this.cname);
    if (this.cname == "") {
      this.ngOnInit();
    } else {
      this.apidata2 = this.apidata2.filter((res) => {
        return res.drive_name
          .toLocaleLowerCase()
          .match(this.cname.toLocaleLowerCase());
      });
    }
  }
  moreclick() {
    if (this.showmore == false) {
      this.showmore = true;
      this.btnName = "less";
    } else {
      this.showmore = false;
      this.btnName = "more";
    }
  }
  selectBranch(branch: string) {
    if(branch !='all')
    {
      console.log(branch);
      this.apidata2 = this.mainData.filter((res) => {
        return res.branch.toLocaleLowerCase().match(branch.toLocaleLowerCase());
      });
    }if(branch=='all')
    {
      this.apidata2=this.mainData;
    }
    else
    {
      console.log(branch);
      this.apidata2 = this.apidata2.filter((res) => {
        return res.branch.toLocaleLowerCase().match(branch.toLocaleLowerCase());
      });
    }
  }

  getJsonArrayFromData(data) {
    var obj = {};
    var result = [];
    var headers = data[0];
    var cols = headers.length;
    var row = [];

    for (var i = 1, l = data.length; i < l; i++) {
      // get a row to fill the object
      row = data[i];
      // clear object
      obj = {};
      for (var col = 0; col < cols; col++) {
        // fill object with new values
        obj[headers[col]] = row[col];
      }
      // add object in a final result
      result.push(obj);
    }
    this.apidata2 = result;
    this.mainData=result;
    //console.log(result);
    return result;
  }
  test_getJsonArrayFromData() {
    var data = [
      ["name", "marks", "class"],
      ["ganesh", 90, 5],
      ["rajesh", 90, 5],
      ["sachin", "89", "5"],
    ];

    //console.log(this.getJsonArrayFromData(data));

    // =>  [{Mainland=Europe, Country=Britain, Planet=Earth, City=London}, {Mainland=Europe, Country=Britain, Planet=Earth, City=Manchester}, {Mainland=Europe, Country=Britain, Planet=Earth, City=Liverpool}, {Mainland=Europe, Country=France, Planet=Earth, City=Paris}, {Mainland=Europe, Country=France, Planet=Earth, City=Lion}]
  }
}
