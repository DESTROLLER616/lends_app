import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from 'src/models/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  URL_BASE = 'https://lends-backend.onrender.com/categories'

  public categories ?: Categories[]

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<Categories[]>(`${this.URL_BASE}`)
  }

  createCategory(category: Categories){
    return this.http.post(this.URL_BASE, category)
  }

  pagination(page:number){
    return this.http.get<Categories[]>(`${this.URL_BASE}/?$skip=${page}`)
  }
}
