import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa-add-page',
  templateUrl: './pessoa-add-page.component.html',
  styleUrls: ['./pessoa-add-page.component.css'],
})
export class PessoaAddPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: PessoaService,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.paramMap.get('id');
    if (id) {
      this.formGroup.patchValue(this.service.buscar(id));
    }
  }

  pessoa: any = {};

  hobbies = [
    'dançar',
    'jogar futebol',
    'assistir séries',
    'assistir filmes',
    'ler livros',
    'ler mangás',
    'assistir animes',
  ];

  formGroup = this.formBuilder.group({
    id: this.formBuilder.control<number | null>(null),
    nome: ['', Validators.required],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
    ],
    hobbies: [''],
  });

  salvar() {
    if (this.formGroup.invalid) {
      alert('Formulario invalido');
    } else {
      if (this.formGroup.value.id) {
        this.service.editar(this.formToValue(this.formGroup));
      } else {
        console.log('salvando pessoa ');
        console.log(this.formGroup.value);
        this.service.salvar(this.formToValue(this.formGroup)).subscribe((p) => {
          alert('Pessoa salva com sucesso!');
        });
      }
    }
  }

  formToValue(form: typeof this.formGroup): Pessoa {
    return {
      id: form.value.id!,
      nome: form.value.nome!,
      email: form.value.email!,
      hobbies: form.value.hobbies!,
    };
  }

  isError(control: 'email' | 'nome' | 'hobbies', validator: string) {
    return this.formGroup.controls[control].getError(validator) ? true : false;
  }
}
