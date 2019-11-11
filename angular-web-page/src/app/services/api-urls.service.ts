import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  public static HEALTH_CHECK_API:string="http://localhost:8080/isalive";
  public static FILE_UPLOAD_API:string="http://localhost:8080/filesupload";
  public static FILE_GET_API:string="http://localhost:8080/getfiles";
  
  constructor(){

  }
}
