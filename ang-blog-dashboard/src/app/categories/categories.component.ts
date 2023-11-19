import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CategoriesService } from '../service/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categoryArray: Array<any> | undefined;

  constructor(private categoryService: CategoriesService){}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      console.log(val)
      this.categoryArray = val;
    })
  }
  onSubmit(formData: any){
    
    // console.log(data.)
    let categoryData: Category = {
      category: formData.value.category
    }
    this.categoryService.saveData(categoryData)
    formData.reset()
  }
}
