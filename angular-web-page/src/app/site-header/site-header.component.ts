import { Component, OnInit } from '@angular/core';
import {BodyMainContentComponent} from './../body-main-content/body-main-content.component';
import {RightSideContentComponent} from './../right-side-content/right-side-content.component';
import {ApiUrlsService} from './../services/api-urls.service';
import {ApiActionsService} from './../services/api-actions.service';

class PrepareReqObj{
  id:string;
  name:string;
  fileList:[];
  constructor(){}
};

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  prepareReqobj = new PrepareReqObj();
  constructor(private apiUrl:ApiUrlsService,private apiAction:ApiActionsService) { }

  ngOnInit() {
  }
  upload(event) {
    console.log("upload method get called");
    this.apiAction.getApi(ApiUrlsService.HEALTH_CHECK_API);
   /*  var imgName = (<HTMLInputElement>document.getElementById('imgName')).value;
    (<HTMLInputElement>document.getElementById('imgName')).value = ""; */
    var files = (<HTMLInputElement>document.getElementById('imgFile')).files;
    let prepareReqobj={email:"ravi@gmail.com",fileList:[]};
    let flag = false;
    for (var i = 0; i < files.length; i++) {
      if(i == files.length -1){
        flag = true;
      }
      this.processImgFileReader(files[i], prepareReqobj, this.apiAction,flag);
    }
    console.log("---- All file processed -----");
  //  console.log("file list number:"+this.prepareReqobj.fileList.length);
  }
  processImgFileReader(file, prepareReqobj, apiAction,flag) {
    let fileResult=null, filter:any, posturl=null, reqObj=null;
    let reader = new FileReader();
      //reader.readAsText(files);
    reader.onload = function() {
      fileResult = reader.result;
      filter = fileResult.split(',');
      console.log("filter:",filter);
      if(filter.length > 1){
        prepareReqobj.fileList[prepareReqobj.fileList.length]=filter[1];
      }
      if(flag){
        let reqObj = JSON.stringify(prepareReqobj);
        apiAction.postApi("http://localhost:8080/filesupload",reqObj);
      }
      //reqObj = JSON.stringify(prepareReqObj);
      //console.log(reqObj);
      //posturl = 'http://localhost:8080/springsecurityimpl/api/uploadjsonfile';
    };
    reader.onloadend = function(){
      console.log("on loadend method get called");
    }
    reader.onerror = function() {
      console.log(reader.error);
    };
    // reader.readAsText(files.item(0));  //readAsDataURL
    reader.readAsDataURL(file);
    reader
    //reader.readAsArrayBuffer(files.item(0));
  }
}
 