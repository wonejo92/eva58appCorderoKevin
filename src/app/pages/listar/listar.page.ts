import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { vehiculo } from 'src/modelo/vehiculo';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  vehiculo:any
  vehiculoB:vehiculo = new vehiculo;

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.vehiculo=this.vehiculoService.listarVehiculo()
  }

  Buscar(){
    console.log(this.vehiculoB)
    this.vehiculoService.buscarVehiculo(this.vehiculoB.Marca).subscribe(data=>{
      this.vehiculoB=data[0]
    })
  }

}
