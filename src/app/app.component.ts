import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projetos = [
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
    { title: "Projeto X", subtitle:"Descrição do Pro",textContent:"Teste",imgAvatar:"/assets/imgsTestes/avatar.png",imgDetalhes:"/assets/imgsTestes/calTeste.jpg"},
  ];
}
