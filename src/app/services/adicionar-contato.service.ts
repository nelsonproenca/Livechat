import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdicionarContatoService {
  
  uri = 'http://localhost:4000/livechats';

  constructor(private http: HttpClient) { }

  addLivechat(fnome, femail, ftelefone, fcpf) {
    const consumidor = {
      nome : fnome,
      email: femail,
      telefone: ftelefone,
      cpf : fcpf
    };

    this.http.post(`{this.uri}/add`, consumidor)
      .subscribe(res => console.log('Feito'));
  }

  getLivechat() {
    return this.http.get(`{this.uri}`);
  }

  editLivechat(id) {
    return this.http.get(`{this.uri}/edit/${id}`)
  }

  updateLivechat(fnome, femail, ftelefone, fcpf, id) {
    const consumidor = {
      nome : fnome,
      email: femail,
      telefone: ftelefone,
      cpf : fcpf
    };

    this.http.post(`{this.uri}/update/${id}`, consumidor)
      .subscribe(res => console.log('Feito'));
  } 

  deleteLivechat(id) {
    return this.http.get(`{this.uri}/delete/${id}`)
  }
}
