import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from '../components/news/news.component';
import { SaintGouenoComponent } from '../components/saint-goueno/saint-goueno.component';
import { HistoriqueComponent } from '../components/historique/historique.component';
import { MonteeHistoriqueComponent } from '../components/montee-historique/montee-historique.component';
import { EcurieDuMeneComponent } from '../components/ecurie-du-mene/ecurie-du-mene.component';
import { PhotosComponent } from '../components/photos/photos.component';
import { VideosComponent } from '../components/videos/videos.component';
import { NgModule } from '@angular/core';
import { LoginAdministrationComponent } from '../components/login-administration/login-administration.component';

export const routes: Routes = [
    {path: 'actualities', component: NewsComponent },
    {path: 'saintGoueno', component: SaintGouenoComponent },
    {path: 'historique', component: HistoriqueComponent },
    {path: 'monteeHistorique', component: MonteeHistoriqueComponent },
    {path: 'ecurieDuMene', component: EcurieDuMeneComponent },
    {path: 'photos', component: PhotosComponent },
    {path: 'videos', component: VideosComponent },
    {path: 'administration', component: LoginAdministrationComponent },
    {path: '', redirectTo: '/actualities', pathMatch: 'full'},
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
