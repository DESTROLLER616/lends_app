import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Categories } from 'src/models/categories.interface';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-table-category',
  templateUrl: './table-category.component.html',
  styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent  implements OnInit {

  constructor(public categoryService: CategoriesService) { }

  ngOnInit() {
    this.getCategories()
  }

  categories: Categories[] = []

  getCategories() {
    this.categoryService.getCategories()
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      console.log(res);
      const {data, total} = res

      this.categories = [...data]

      console.log(total);
      
    }, 
    (err) => console.log('error')
     )
  }

}
