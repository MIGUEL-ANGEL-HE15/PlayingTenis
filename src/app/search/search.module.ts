import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";

import { SearchFormComponent } from './search-form.component';//importado
import { NoticiasService } from '../domain/noticias.service';
import{ NativeScriptFormsModule } from "nativescript-angular/forms"//importado

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        NativeScriptFormsModule//importado
    ],
    declarations: [
        SearchComponent,
        SearchFormComponent//agregado
    ],
    providers: [NoticiasService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
