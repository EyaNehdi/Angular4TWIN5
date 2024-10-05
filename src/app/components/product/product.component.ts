import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id!: number;
constructor(private activated:ActivatedRoute){
//this.id = this.activated.snapshot.params['id'];
console.log('Snapshot Method');
console.log(this.activated.snapshot.params['id']);
console.log('params: ');
this.activated.params.subscribe({
  next : (param)=>console.log(param['id'])
})
console.log('paraMap');
this.activated.paramMap.subscribe({
  next : (param)=>console.log(param.get('id'))

})

}
}
