import { Component, OnInit } from '@angular/core';
import { DuckService } from '../../services/duck.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  imageUrl: string = '';
  isLoading: boolean = true;
  constructor(private duckService: DuckService) {}

  ngOnInit() {
    this.loadNewQuack(); // Cargar la imagen al inicio de la página
  }

  async loadNewQuack() {
    this.isLoading = true; // Iniciar el skeleton
    try {
      this.imageUrl = await this.duckService.getRandomQuack();
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    } finally {
      this.isLoading = false; // Detener el skeleton
    }
  }
}
