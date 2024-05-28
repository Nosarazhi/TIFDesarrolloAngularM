import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-interfaz2',  
  templateUrl: './interfaz2.component.html',
  styleUrls: ['./interfaz2.component.css']
})
export class Interfaz2Component implements OnInit {
  mensaje: string = '';

  constructor(private mensajeService: MensajeService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.mensajeService.obtenerMensaje().subscribe(data => {
      this.mensaje = data.mensaje;
    });
  }
  
  volverPrimeraInterfaz() {
    this.router.navigate(['/interfaz1']);
  }
}

