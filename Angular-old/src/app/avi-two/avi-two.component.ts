import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avi-two',
  templateUrl: './avi-two.component.html',
  styleUrl: './avi-two.component.css'
})
export class AviTwoComponent {

  person = 
    {
    id: 0,
    name: '',
    age: 0,
    contact: '',
    imgUrl: '',
    }
  
  constructor(private router: Router) {}

  onSubmit() {
    localStorage.setItem('personData', JSON.stringify(this.person));

    this.router.navigate(['/']);
  }
}
  

