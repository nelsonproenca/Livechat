import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdicionarContatoService } from '../../services/adicionar-contato.service'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adicionarContatoService: AdicionarContatoService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required]
    });
  }

  addLivechat(fnome, femail, ftelefone, fcpf) {
    this.adicionarContatoService.addLivechat(fnome, femail, ftelefone, fcpf);
  }

  ngOnInit() {
  }
}
