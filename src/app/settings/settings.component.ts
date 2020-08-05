import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";//lib de dialogos
import { concat } from "rxjs";
import* as Toast from "nativescript-toasts";//lib de TOAST
// para instalar npm install nativescript-toasts --save
@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    doLater(fn){ setTimeout(fn,1000);}

    ngOnInit(): void {
        // Init your component properties here.
        /*this.doLater(()=>
            dialogs.action("mensaje", "cancelar",["Opción 1", "Opción 2"])
            .then((result) =>{
                console.log("resultado --->"+result);
                if(result == "Opción 1"){
                    this.doLater(()=>
                        dialogs.alert({
                            title:"Aqui va el titulo",
                            message:"Aqui va el mensaje",
                            okButtonText:"botón"
                        }).then(()=>console.log("cerrado 1!"))
                    );
                }else if(result == "Opción 2"){
                    this.doLater(()=>
                        dialogs.alert({
                            title:"Titulo",
                            message:"Mensaje",
                            okButtonText:"texto boton"
                        }).then(()=>console.log("cerrado!"))

                    );
                }
            })
        );*/

        const toastOptions: Toast.ToastOptions = {
            text:"Miguel Ángel Hernandez Espinoza \n 8B \n Ing. TI",
            duration: Toast.DURATION.SHORT
        };

        this.doLater(()=> Toast.show(toastOptions));
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
