import {Component} from '@angular/core';

@Component({
    selector: 'ngx-dashboard-sidebar-component',
    template: `
        <nb-actions size="medium">
            <nb-action icon="nb-menu"></nb-action>
            <nb-action icon="nb-search"></nb-action>
            <nb-action icon="nb-email"></nb-action>
        </nb-actions>`
    ,
})
export class DashboardSidebarComponent {
}
