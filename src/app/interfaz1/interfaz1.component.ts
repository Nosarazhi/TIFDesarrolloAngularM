import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interfaz1',
  templateUrl: './interfaz1.component.html',
  styleUrls: ['./interfaz1.component.css']
})
export class Interfaz1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irSegundaInterfaz() {
    this.router.navigate(['/interfaz2']);
  }

}
