import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise( (resolve, reject) => {
        this.http.get('https://angular-html-6dd59.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {

          this.productos = resp;
          this.cargando = false;
          resolve();

        });
    });

  }

  public getProducto(id: string) {
    return this.http.get(`https://angular-html-6dd59.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string ){

    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar despues de tener productos
        // aplicar filtro
        this.filtrarProductos( termino );
      });
    } else {
      // aplicar filtro
      this.filtrarProductos( termino );
    }

  }

  private filtrarProductos( termino: string ) {

    this.productosFiltrado = [];
    termino = termino.toLowerCase();


    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLowerCase();
      const categoriaLower = prod.categoria.toLowerCase();

      if ( categoriaLower.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0) {
        this.productosFiltrado.push( prod );
      }
    });
  }
}
