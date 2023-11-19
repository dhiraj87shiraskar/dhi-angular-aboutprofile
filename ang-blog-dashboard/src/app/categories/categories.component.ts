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

  constructor(private categoryService: CategoriesService){

  }
  ngOnInit(): void {
    
  }
  onSubmit(formData: any){
    let categoryData: Category = {
      categorey: formData.value.category
    }
    this.categoryService.saveData(categoryData)
  }
}
