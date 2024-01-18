import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projetos = [
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
  ];
}
