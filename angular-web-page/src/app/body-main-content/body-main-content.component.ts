import { Component, OnInit } from '@angular/core';
import {ApiUrlsService} from './../services/api-urls.service';
import {ApiActionsService} from './../services/api-actions.service';



@Component({
  selector: 'app-body-main-content',
  templateUrl: './body-main-content.component.html',
  styleUrls: ['./body-main-content.component.css']
})
export class BodyMainContentComponent implements OnInit {
   private imgSrc:any;
   private fileIndex:number=-1;
   private subFileIndex:number=-1;
   private getResponseData:Object = null;
   private show:boolean=false;
   private dialogueBoxImgCount:any=-1;
   private dialogueImgSrc:any;


  constructor(private apiAction:ApiActionsService) { }

  ngOnInit() {
    console.log("after called");
    this.fileIndex += 1;
    this.subFileIndex += 1;
    this.imgSrc = [];
    this.apiAction.getApi(ApiUrlsService.FILE_GET_API).subscribe(data => {
      console.log("get data:",data);
      if((data == null) || (data[0] == null)){
        return;
      }
      this.getResponseData = data;
      for(let index = 0; data[index] != null; index++ ) {
        let base64Str = this.convertByteArraytoBase64(this.getResponseData[index].fileList[this.subFileIndex]);
        let eachImg = {id:-1,imgSrc:"",imgIndex:-1};
        eachImg.id = index; 
        eachImg.imgIndex = 0; 
        eachImg.imgSrc = 'data:image/jpeg;base64,' + base64Str;
        this.imgSrc.push(eachImg);
        //this.imgSrc = 'data:image/jpeg;base64,' + base64Str;
      }
    });
  }
  convertByteArraytoBase64(byteArray){
    var bytes = new Uint8Array( byteArray);
    var len = bytes.byteLength;
    let binary="";
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    let base64Str = window.btoa( binary );
    return base64Str;
  }
  onMainImgClick(ele:any){
    console.log("ele passed:",ele);
    this.show = true;
    this.dialogueBoxImgCount = ele;
    if(this.getResponseData[this.dialogueBoxImgCount.id].fileList[this.dialogueBoxImgCount.imgIndex] == null){
      ele.imgIndex = 0;
    } 
    let base64Str = this.convertByteArraytoBase64(this.getResponseData[this.dialogueBoxImgCount.id].fileList[this.dialogueBoxImgCount.imgIndex]);
    this.dialogueImgSrc = 'data:image/jpeg;base64,' + base64Str;
  }
  onImgDialogueImgClick(){
    this.dialogueBoxImgCount.imgIndex += 1;
    if(this.getResponseData[this.dialogueBoxImgCount.id].fileList[this.dialogueBoxImgCount.imgIndex] == null){
      this.dialogueBoxImgCount.imgIndex = 0;
    } 
    let base64Str = this.convertByteArraytoBase64(this.getResponseData[this.dialogueBoxImgCount.id].fileList[this.dialogueBoxImgCount.imgIndex]);
    this.dialogueImgSrc = 'data:image/jpeg;base64,' + base64Str;
  }
  onDialogueClick(){
    this.show = false;
    this.dialogueBoxImgCount=null;
  }

}
