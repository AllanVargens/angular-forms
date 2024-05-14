import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PessoaService {
  id = 1;
  constructor() {}

  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return of(pessoa).pipe(
      tap((p) => {
        localStorage.setItem('pessoa_' + this.id, JSON.stringify(pessoa));
        this.id++;
        console.log(pessoa);
      })
    );
  }

  buscar(id: string): Pessoa {
    const pessoa = localStorage.getItem('pessoa_' + id);
    return JSON.parse(pessoa ? pessoa : '{}');
  }

  editar(pessoa: Pessoa) {
    const pessoaJson = JSON.stringify(pessoa);
    localStorage.setItem('pessoa_' + pessoa.id, pessoaJson);
  }
}
