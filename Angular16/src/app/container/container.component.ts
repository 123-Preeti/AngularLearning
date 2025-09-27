import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  //method1 1 : string interpolation
  // name: string= "iPhone13";
  // price: number = 999;
  // color: string = "Red";

  //method 2  : property binding

  product = {
    name: "iPhone13",
    price: 999,
    color: "Black",
    discount: 8.5,
    img: "/"
  }

    greetmsg = {
    firstname: "Avinash",
    lastname: "Preeti"
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price + this.product.discount / 100)
  }


  greet() {
    return ( this.greetmsg.firstname + this.greetmsg.lastname)
  }

// ==================  STRUCTURAL DIRECTIVES

listOfString: string[] = ["preeti", "john","Thomas ", "Albert"];


}
