import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { vehiculo } from 'src/modelo/vehiculo';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  file: File = null; // Variable to store file

  vehiculo: vehiculo = new vehiculo();
  
  imagen:any

  constructor(private viheculoService:VehiculoService,private router:Router) { }

  ngOnInit() {
    
  }

  Guardar(){
    console.log(this.vehiculo)
    this.viheculoService.save(this.vehiculo)
    this.router.navigate(['listar'])

  }

  fileUpload(event:any){
    console.log(event)
    const reader = new FileReader();
    reader.onload=((image)=>{
      this.imagen=image.target.result as string
      console.log(this.imagen)
    })
    console.log(this.imagen)

  }

}
