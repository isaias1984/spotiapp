import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotity: SpotifyService) {  }

  buscar(termino: string) {
    this.loading = true;
    this.spotity.getArtistas(termino)
      .subscribe( (data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      });
  }

}
