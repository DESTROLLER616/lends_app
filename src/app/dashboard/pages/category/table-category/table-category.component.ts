import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Categories } from 'src/models/categories.interface';
import { AlertsService } from 'src/services/alerts/alerts.service';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-table-category',
  templateUrl: './table-category.component.html',
  styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent  implements OnInit {

  page:number = 0
  max = 0
  isAddActivate: boolean = false
  isMinusActivate: boolean = true

  constructor(public categoryService: CategoriesService, private categoryAlerts: AlertsService) { }

  ngOnInit() {
    this.getCategories()
  }

  categories: Categories[] = []

  numPage(page: number){
    let num = this.page += page

    if(num < 0){
      console.log('minus');
      
      this.page = 0
      this.getCategories(num)
      this.isMinusActivate = true
    }

    if(num >= this.max) {
      console.log('max');
      
      this.page = this.max
      this.isAddActivate = true
      this.getCategories(this.page)
    }

    this.isAddActivate = false

    this.isMinusActivate = false

    return this.getCategories(num)
  }

  getCategories(page:number = 0) {
    this.categoryService.getCategories(page)
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      console.log(res);
      const {data, total, limit} = res

      this.categories = [...data]

      console.log(total);

      if(total > 10){
        this.max = total - 10
      }

      console.log(this.max);
      
      
    }, 
    (err) => console.log('error')
     )
  }

  deleteCategory(id: any, name: string) {
    this.categoryAlerts.deleteCategory(name, id)
  }

  editCategory(id: any, name: string, description: string){
    this.categoryAlerts.editCategory(id, name, description)
  }

}
