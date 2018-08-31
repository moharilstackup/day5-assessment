import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';


import {FlexLayoutModule} from '@angular/flex-layout';

const MODULES = [ 
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    FlexLayoutModule,
    MatSliderModule,
    MatCheckboxModule
] ;

@NgModule ({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule { }