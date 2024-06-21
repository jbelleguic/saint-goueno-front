import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NewsComponent } from '../components/news/news.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, NewsComponent ],
  declarations: [ AppComponent, NavbarComponent, NewsComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }