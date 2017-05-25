import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pm-app',
    templateUrl: 'app.component.html',
    providers: []
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}