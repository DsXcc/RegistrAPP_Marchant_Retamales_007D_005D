import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

    newUser: User={
    username:'',
    password:'',
    role: 'usuario',
    nombre_asignatura:'',
    ano_asignatura:'',
    semestre_asignatura:'',
    horas_asignatura:'',
    isactive: true



  }


  constructor(private alertController: AlertController,
              private ApiCrud: ApiService,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.registroForm = this.formBuilder.group({
                  'username' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(4)])

                })
               }

  ngOnInit() {
  }

  crearUsuario(){
    this.ApiCrud.CrearUsuario(this.newUser).subscribe();
    this.router.navigateByUrl("/login")
  }

  async Mensaje(){
    const alert = await this.alertController.create({
      header: 'Gracias!!',
      message: 'Se ha registrado con exito',
      buttons: ['OK'],
    });
    await alert.present();
  }
  
}