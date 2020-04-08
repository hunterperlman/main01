import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router";

import { AppRoutes } from "./routes";

import { AppComponent } from './app.component';
import { LoginComponent } from './newuser/newuser.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MomentPipe } from './moment.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddtodataComponent } from './addtodata/addtodata.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    LoginComponent,
    MomentPipe,
    AddtodataComponent,
    DatabaseComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, { enableTracing : true })
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstraps with app component
})
export class AppModule { }
