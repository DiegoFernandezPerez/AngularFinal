import { Component, OnInit } from '@angular/core';

//import { symlink } from 'fs';
//import { Direction } from 'readline';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

listaVideojuegos = [
    {id : 1, titulo : 'MarioBros', compania : 'Electronic', image : {src: '/src/assets/images/Mario.png'},  valoracionMedia : 4.5},
    {id : 2, titulo : 'MarioBros', compania : 'Electronic', image : {src: './Mario.png'}, valoracionMedia : 4.8},
    {id : 3, titulo : 'MarioKart', compania : 'Electronic', image : {src: './metroid.png'}, valoracionMedia : 4.9},
  ];
  

  constructor() { }
 
  ngOnInit(): void {

  }
}
