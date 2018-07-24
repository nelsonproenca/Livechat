import { Component, OnInit } from '@angular/core';
import { IConsumidor } from './Consumidor';
import { AdicionarContatoService } from '../../services/adicionar-contato.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  consumidores: IConsumidor[];

  constructor(private adicionarContatoService: AdicionarContatoService) { }
  
  deleteLivechat(id) {
    this.adicionarContatoService.deleteLivechat(id).subscribe(res => {
      console.log('Deletado.');
    });
  }

  ngOnInit() {
    this.adicionarContatoService.getLivechat().subscribe((data: IConsumidor[]) => {
      this.consumidores = data;
    });
  }
}
