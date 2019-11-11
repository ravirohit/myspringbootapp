import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {    // for post method it is required
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*'     
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiActionsService {

  constructor(private http:HttpClient) { }

  getApi(url:string) {  // by default it expect json reponse.
     //return this.http.get(url);
     return this.http.get(url);
  }
  postApi(url:string, reqObj:string) {
     this.http.post(url,reqObj,httpOptions).subscribe(data => {
       console.log("response data for post api:",data);
     })
  }
}
