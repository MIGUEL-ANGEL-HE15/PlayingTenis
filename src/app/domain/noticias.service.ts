// array local

/*import {Injectable} from "@angular/core";

@Injectable()
export class NoticiasService{
    private noticias: Array<string> = [];
    
    agregar(s:string){
        this.noticias.push(s);
    }

    buscar(){
        return this.noticias;
    }
}*/


import {Injectable} from "@angular/core";
import {getJSON, request } from "tns-core-modules/http";

@Injectable()
export class NoticiasService{
    api: string = "https://cd919bf2.ngrok.io/";

    agregar(s : string){
        return request({
            url: this.api+"/favs",
            method : "POST",
            headers : {"Content-Type" : "aplication/json"},
            content : JSON.stringify({
                nuevo : s
            })
        });
    }

    favs(){
        return getJSON(this.api + "/favs");
    }

    buscar(s : string){
        console.log("buscando en ==> "+this.api +"get?q="+s);
        return getJSON(this.api + "get?q=" + s);
    }
}
