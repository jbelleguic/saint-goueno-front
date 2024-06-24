import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NewsComponent } from '../components/news/news.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { SaintGouenoComponent } from '../components/saint-goueno/saint-goueno.component';
import { HistoriqueComponent } from '../components/historique/historique.component';
import { MonteeHistoriqueComponent } from '../components/montee-historique/montee-historique.component';
import { EcurieDuMeneComponent } from '../components/ecurie-du-mene/ecurie-du-mene.component';
import { PhotosComponent } from '../components/photos/photos.component';
import { VideosComponent } from '../components/videos/videos.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, NavbarComponent, NewsComponent, FooterComponent, SaintGouenoComponent, MonteeHistoriqueComponent, HistoriqueComponent, EcurieDuMeneComponent, PhotosComponent, VideosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }