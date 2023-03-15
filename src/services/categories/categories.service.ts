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

  getCategories(page:number = 0){
    return this.http.get<Categories[]>(`${this.URL_BASE}/?$skip=${page}`)
  }

  createCategory(category: Categories){
    return this.http.post(this.URL_BASE, category)
  }

  deleteCategory(id: String){
    // console.log(`${this.URL_BASE}/${id}`);
    
    return this.http.delete(`${this.URL_BASE}/${id}`)
    
  }

  patchCategory(category: Categories){
    let cat = {
      name: category.name,
      description: category.description
    }

    // console.log(cat.description);
    

    return this.http.patch(`${this.URL_BASE}/${category._id}`, cat)
  }

  pagination(page:number){
    return this.http.get<Categories[]>(`${this.URL_BASE}/?$skip=${page}`)
  }
}
