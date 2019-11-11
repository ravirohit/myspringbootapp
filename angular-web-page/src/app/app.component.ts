import { Component } from '@angular/core';
import {SiteHeaderComponent} from './site-header/site-header.component';
import {SiteBodyComponent} from './site-body/site-body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web-page';
}
