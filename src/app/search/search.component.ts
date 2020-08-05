import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from '../domain/noticias.service';
import* as Toast from "nativescript-toasts";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
    //providers: [NoticiasService]
})
export class SearchComponent implements OnInit {
    resultados : Array<string>;

    constructor( private noticias : NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        /*this.noticias.agregar("Jugador 1");
        this.noticias.agregar("Jugador 2");
        this.noticias.agregar("Jugador 3");
        this.noticias.agregar("Jugador 4");
        this.noticias.agregar("Jugador 5");
        this.noticias.agregar("Jugador 6");
        this.noticias.agregar("Jugador 7");
        this.noticias.agregar("Jugador 8");
        this.noticias.agregar("Jugador 9");
        this.noticias.agregar("Jugador 10");
        this.noticias.agregar("Jugador 20");
        this.noticias.agregar("Jugador 30");
        this.noticias.agregar("Jugador 40");
        this.noticias.agregar("Jugador 50");
        this.noticias.agregar("Jugador 60");
        this.noticias.agregar("Jugador 70");
        this.noticias.agregar("Jugador 80");
        this.noticias.agregar("Jugador 90");*/
        this.buscarAhora("");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x){
        console.dir(x);
    }

    buscarAhora(s : string){
       /* console.log(s);
        this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);*/


        console.dir("buscarAhora ==> " + s);
        this.noticias.buscar(s).then((r : any) => {
            console.log("resulatados buscarAhora ==> "+ JSON.stringify(r));
            this.resultados = r;
        }, (e) =>{
            console.log("error buscarAhora ==>" + e);
            Toast.show({
                text: "Error de busqueda",
                duration : Toast.DURATION.SHORT});
        });
    }

}
