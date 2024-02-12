import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private httpCliente: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],

    });
  }

  create(product: Product): Observable<Product> {
    return this.httpCliente.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }
  erroHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }

  read(): Observable<Product[]> {
    return this.httpCliente.get<Product[]>(this.baseUrl)

  }
  readById(id: String): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.httpCliente.get<Product>(url)

  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.httpCliente.put<Product>(url, product)
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`
    return this.httpCliente.delete(url)

  }
}
