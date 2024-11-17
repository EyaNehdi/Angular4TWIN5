import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProducts : Product[]=[
    {"id":1,"name":"Cuisinière", "image":"assets/images/grand_electromenagers/cuisiniere.png", "description":"699 dt","price":"200", "promotion":0, "quantity":50, "categoryId":1},
    {"id":2,"name":"Réfrigérateur", "image":"assets/images/grand_electromenagers/refrigerateur.jpg", "description":"1500 dt", "promotion":0, "quantity":20, "categoryId":1},
    {"id":3,"name":"Robot Pétrin", "image":"assets/images/petit_electromenager/robot_petrin.jpg", "description":"430 dt", "promotion":0, "quantity":150, "categoryId":2},
    {"id":4,"name":"Fer à repasser", "image":"assets/images/petit_electromenager/fer_a_repasser.jpg", "description":"130 dt", "promotion":0, "quantity":100, "categoryId":2},
    {"id":5,"name":"Oppo", "image":"assets/images/smart_phones/Oppo.jpg", "description":"920 dt", "promotion":0, "quantity":10, "categoryId":4},
    {"id":6,"name":"TV Téléfunkun", "image":"assets/images/tv_images_son/tv1.jpg", "description":"845 dt", "promotion":0, "quantity":50, "categoryId":5},
]
}
