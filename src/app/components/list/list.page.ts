import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Si deseas navegar a otra página
import { DuckService } from '../../services/duck.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  /*arrays*/
  images: string[] = [];
  gifs: string[] = [];
  http: string[] = [];
  loading = false;
  page = 0;
  limit = 20; // Limita la cantidad de elementos en visualizacion

  constructor(private duckService: DuckService, private router: Router) {}

  ngOnInit(): void {
    this.loadQuacks();
  }

  // cargar lista
  loadQuacks(): void {
    if (this.loading) return; // Evitar colapso por recurrencia
    this.loading = true;

    this.duckService
      .getQuackList()
      .then((data) => {
        const allImages = data.images;
        const allGifs = data.gifs;
        const allHttp = data.http;

        // limitar elementos visibles 
        this.images = this.images.concat(
          allImages.slice(this.page * this.limit, (this.page + 1) * this.limit)
        );
        this.gifs = this.gifs.concat(
          allGifs.slice(this.page * this.limit, (this.page + 1) * this.limit)
        );
        this.http = this.http.concat(
          allHttp.slice(this.page * this.limit, (this.page + 1) * this.limit)
        );

        this.page++; // añadir una pagina mientras avanza
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error al cargar las quacks', error);
        this.loading = false;
      });
  }

  onScroll(event: any): void {
    //fin scroll
    const scrollElement = event.target;
    if (
      scrollElement.scrollHeight ===
      scrollElement.scrollTop + scrollElement.clientHeight
    ) {
      this.loadQuacks();
    }
  }

  onQuackClick(imageUrl: string) {
    // manejar click y enviar parametros a la pagina de detalles
    this.router.navigate(['/image-detail'], {
      queryParams: { imageUrl },
    });
  }
}
