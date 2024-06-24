import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NewsComponent } from '../components/news/news.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SaintGouenoComponent } from '../components/saint-goueno/saint-goueno.component';
import { HistoriqueComponent } from '../components/historique/historique.component';
import { MonteeHistoriqueComponent } from '../components/montee-historique/montee-historique.component';
import { EcurieDuMeneComponent } from '../components/ecurie-du-mene/ecurie-du-mene.component';
import { PhotosComponent } from '../components/photos/photos.component';
import { VideosComponent } from '../components/videos/videos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterOutlet, RouterLinkActive, NavbarComponent, NewsComponent, FooterComponent, SaintGouenoComponent, HistoriqueComponent, MonteeHistoriqueComponent, EcurieDuMeneComponent, PhotosComponent, VideosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'saintGoueno';
}
