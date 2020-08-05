import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
    selector: "SearchForm",
    moduleId: module.id,
    template: `
    <TextField [(ngModel)]="textFieldValue" hint="ingresar texto..."></TextField>
    <Button text="Buscar" (tap)="onButtonTap()"></Button>
    `
    //[] los cochetes cuando pasamos un valor como parametrode un componente : "" INPUT
    //() los parentesis son los eventos
    //[()] esto se llama TWO-WAY BINDING
})
export class SearchFormComponent implements OnInit{
    textFieldValue: string = "";
    @Output() search: EventEmitter<string> = new EventEmitter();
    @Input() inicial: string;

    ngOnInit(){
        this.textFieldValue = this.inicial;
    }

    onButtonTap(): void {
        console.log(this.textFieldValue);
        if(this.textFieldValue.length>=0){
            this.search.emit(this.textFieldValue);
        }
    }
}