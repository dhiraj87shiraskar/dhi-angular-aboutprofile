import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  constructor(private afs: AngularFirestore){

  }
  ngOnInit(): void {
    
  }
  onSubmit(formData: any){
    // let categoryData = {
    //   category: formData.value.category,
    //   status: 'active'
    // }
    // let subCategorydata = {
    //   subCategory: 'subcatgory2'
    // }
    // let subSubCategorydata = {
    //   subSubCategory: 'subSubcatgory2'
    // }
    // this.afs.collection('categories').add(categoryData).then((docRef) => {
      // console.log(docRef)
      // this.afs.collection('categories').doc(docRef.id).collection("subcategories").add(subCategorydata).then(subCat => {
      //   console.log(subCat)
      //   // this.afs.doc(`categories/${docRef.id}/subcategories/${subCat.id}`).collection("subsubcategories").add(subSubCategorydata).then()
      //   this.afs.collection('categories').doc(docRef.id).collection("subcategories").doc(subCat.id).collection("subsubcategories").add(subSubCategorydata).then(subsubRefId =>{
      //     console.log(subsubRefId)

      //   })
      // })
    // }).catch(err => {console.log(err)})
    
  }
}
