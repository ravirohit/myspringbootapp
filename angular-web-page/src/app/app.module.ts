import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteBodyComponent } from './site-body/site-body.component';
import { BodyMainContentComponent } from './body-main-content/body-main-content.component';
import { RightSideContentComponent } from './right-side-content/right-side-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteBodyComponent,
    BodyMainContentComponent,
    RightSideContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
