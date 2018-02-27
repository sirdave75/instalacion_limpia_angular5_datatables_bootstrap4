import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent implements  OnInit{

    public nombre:string;
    public  mejor_juego:string;
    public mejor_juego_retro:string;
    public mostrar_retro:boolean;
    public color:string;
    public year:number;
    public json;

    public dtOptions: any  = {};
    constructor(){
        this.nombre = 'Videojuegos 2018';
        this.mejor_juego = 'GTA 5';
        this.mejor_juego_retro = 'Super Mario 64';
        this.mostrar_retro = true;
        this.color = 'yellow';
        this.year = 2018;
        this.json = {
        "data" : [
            {"id":1,"nombre":"Los Simpson hit and run"},
            {"id":2,"nombre":"Assasin Creed"},
            {"id":3,"nombre":"GTA 5"},
            {"id":4,"nombre":"Call of Duty"},
            {"id":5,"nombre":"Tekken"}
        ]
    };


    }

    ngOnInit():void{
       this.dtOptions = {
        dom:"Btipr",
       lengthMenu: [[10, 25, 50, -1], ["10", 25, 50, "Todas"]],
        buttons: [
               "pageLength",
               "colvis"

        ],
        language:{
            buttons:{
                pageLength:{
                    "_": "Mostrar %d filas",
                    "-1": "Mostrar todas las filas"
                }

            },
            url: '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json'
        },

        columns : [
               {
                    title: 'ID',
                    data: 'id'
               },
               {
                    title: 'Nombre',
                    data: 'First name'
               },
               {
                    title: 'Apellidos',
                    data: 'Last name'
               },
           ]
       };
    }
}

