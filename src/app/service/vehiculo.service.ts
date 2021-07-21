import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { vehiculo } from 'src/modelo/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(public afs: AngularFirestore,private storage:AngularFireStorage) { }

  save(vehiculo:vehiculo){
    const refMascota =this.afs.collection("Vehiculo");
    if(vehiculo.vid==null){
      vehiculo.vid= this.afs.createId();
    }
    refMascota.doc(vehiculo.vid).set(Object.assign({},vehiculo));
  }

  listarVehiculo(): Observable<any[]>{
    return this.afs.collection("Vehiculo").valueChanges();
  }

  buscarVehiculo(marca:string): Observable<any>{
    return this.afs.collection("Vehiculo",
    ref=>ref.where('Marca','==',marca)).valueChanges();
  }


  uploadImage(file:any, path:string){
    //const filepath=path;
    //const ref =this.storage.ref(filepath)
    //const task=ref.put(file)
    alert("Se cargo la imagen")
  }
}
