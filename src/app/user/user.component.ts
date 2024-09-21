import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
titre:string="Hello"

person = {
  id:1,
  name:"test",
  age:20
}
quantity=8;
imgsrc="/assets/planet.jpg"
height=200;
width=200;
color="blue";
color2=""

buy (){
this.quantity--;
}
 onInputChange(event: Event){
  const lol = event.target as HTMLInputElement
  this.color = lol.value

 }
}
