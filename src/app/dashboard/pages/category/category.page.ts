import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { take } from 'rxjs';
import { Categories } from 'src/models/categories.interface';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(public categoryService: CategoriesService, private fb: FormBuilder, private alertController: AlertController) { }

  categories: Categories[] = []

  ngOnInit() {
  }

  category: Categories = {
    _id: '',
    name: '',
    description: ''
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Category',
      subHeader: 'Added',
      message: 'Category added succesfuly',
      buttons: ['OK'],
    });

    await alert.present();
  }

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

  cleanForm(form: NgForm){
    return form.reset()
  }

  addCategory(form: NgForm){
    this.categoryService.createCategory(form.value).subscribe(
      res => {
        this.getCategories()
        this.cleanForm(form)
        this.presentAlert()
      },
      err => console.log(err)
    )
  }

}
