import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DuckService {
  private apiBaseUrl = 'https://random-d.uk/api';  // ruta absoluta
  private apiRandom = '/api/v2/quack'; // ruta al proxy para evitar conflictos de CORS en el sevidor
  private apiList = '/api/v2/list';

  constructor() {}

  getRandomQuack(): Promise<string> {
    return axios
      .get(this.apiRandom)
      .then((response) => {
        console.log(this.apiRandom);
        return response.data.url;
      })
      .catch((error) => {
        console.error('Error al obtener el Quack:', error);
        throw error;
      });
  }

  // Obtener la lista de imágenes, gifs y códigos http
  async getQuackList(): Promise<{
    images: string[];
    gifs: string[];
    http: string[];
  }> {
    try {
      const response = await axios.get(`${this.apiList}`);

      const imageFiles = response.data.images;
      const gifFiles = response.data.gifs;
      const httpFiles = response.data.http;

      // crear rutas al archivo
      const imageUrls = imageFiles.map(
        (fileName: string) => `${this.apiBaseUrl}/${fileName}`
      );
      const gifUrls = gifFiles.map(
        (fileName: string) => `${this.apiBaseUrl}/${fileName}`
      );
      const httpUrls = httpFiles.map(
        (fileName: string) => `${this.apiBaseUrl}/http/${fileName.replace('.jpg', '')}`
      );

      return { images: imageUrls, gifs: gifUrls, http: httpUrls };
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
      throw error;
    }
  }
}