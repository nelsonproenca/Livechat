import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { IConsumidor } from '../index/Consumidor';
import { AdicionarContatoService } from '../../services/adicionar-contato.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  consumidor: any = {}
  angForm: FormGroup
   
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adicionarContatoService: AdicionarContatoService,
    private fb: FormBuilder) {
 
    }
  
  createForm() {
    this.angForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required]      
    });
  }

  updateLivechat(fnome, femail, ftelefone, fcpf) {
    this.route.params.subscribe(params => {
      this.adicionarContatoService.updateLivechat(fnome, femail, ftelefone, fcpf, params['id']);
      this.router.navigate(['index']);
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.adicionarContatoService.editLivechat(params['id']).subscribe(res => {
        this.consumidor = res;    
      });
    });
  }
}