import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
product!: FormGroup;

search!: FormControl;
constructor(private fb:FormBuilder){}
ngOnInit(): void {
  this.search=new FormControl();
    this.product = this.fb.group({
      name:["Test",[Validators.required]],
      image: [],
      description: [],
      price: [],
      brand: this.fb.group({
        name:["",[Validators.minLength(3),Validators.required]],
        logo:[],
      }),
      promotion:[],
      quantity: [],
      nb_likes: [{value:'0',disabled:true}],
      tags:this.fb.array([]),

    })
  
 /* this.search=new FormControl();
  this.product= new FormGroup({
    name : new FormControl("Test",[Validators.required]),
    image:new FormControl(),
   description:new FormControl(),
  price:new FormControl(),
  brand:new FormGroup({
    name: new FormControl("",[Validators.minLength(3),Validators.required]),
    logo: new FormControl()
  }),
  promotion:new FormControl(),
  quantity:new FormControl(),
  nb_Likes: new FormControl({value:'0',disabled:true}),
  tags : new FormArray([new FormControl("")])
  })*/
}
get name (){
  return this.product.get('name') as FormControl;
}
get image(){
  return this.product.get('image') as FormControl;
}
get description(){
  return this.product.get('description') as FormControl;
}
get price(){
  return this.product.get('price') as FormControl;
}
get brandName(){
  return this.product.get('brand')!.get('name');
}
get brandLogo(){
  return this.product.get('brand')!.get('logo');
}
get promotion(){
  return this.product.get('promotion');
}
get quantity(){
  return this.product.get('quantity');
}

get tags():FormControl[]{
  return (this.product.get('tags') as FormArray)!.controls as FormControl[];
}
addTags(){
  this.tags.push(new FormControl());
}
submit(){
  console.log (this.product.get('tags') as FormArray);
  console.log(this.product.get('name'));
  console.log (this.product.get('brand')!.get('name'));
  console.log(this.product.getRawValue());
}

}
