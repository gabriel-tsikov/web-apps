import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpInterceptorService } from './http-interception/http-interception.service';
import { PropagationDirective } from './propagation.directive';


@NgModule({
    declarations: [/*FormErrorComponent*/PropagationDirective],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        }
    ],
    exports: [
       /* FormErrorComponent*/
    ]
})
export class SharedModule {
}
