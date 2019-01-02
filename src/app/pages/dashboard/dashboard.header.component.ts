import {Component} from '@angular/core';

@Component({
    selector: 'ngx-dashboard-header-component',
    template: `
        <nb-card [nbSpinner]="true" nbSpinnerStatus="primary">
            <nb-card-body>
                Some card content.
            </nb-card-body>
        </nb-card>`
    ,
})
export class DashboardHeaderComponent {
}
