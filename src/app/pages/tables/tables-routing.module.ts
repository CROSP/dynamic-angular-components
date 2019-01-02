import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TablesComponent} from './tables.component';
import {SmartTableComponent} from './smart-table/smart-table.component';
import {TablesHeaderComponent} from './tables.header.component';

const routes: Routes = [{
    path: '',
    children: [{
        path: 'smart-table',
        children: [
            {
                path: '',
                data: {title: 'Tables'},
                component: SmartTableComponent,
            },
            {
                outlet: 'header-top',
                path: '',
                component: TablesHeaderComponent,
            }],
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TablesRoutingModule {
}

export const routedComponents = [
    TablesComponent,
    TablesHeaderComponent,
    SmartTableComponent,
];
