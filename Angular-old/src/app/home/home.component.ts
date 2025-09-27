import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//   yourname: String =  'preeti'
//   searchText: string = '';

//   imageUrl : string = "/assets/dist/img/baby.jpeg";


//    loadImage() {
//       console.log("AVi");
// alert("You want to show this image " + this.searchText);
//   this.imageUrl = "/assets/dist/img/" + this.searchText ;
//   console.log(this.imageUrl);
      
   

    person: any = null;

  ngOnInit(): void {
    const storedData = localStorage.getItem('personData');
    if (storedData) {
      this.person = JSON.parse(storedData);
    }
  }
}
