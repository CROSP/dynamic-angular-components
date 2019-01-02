import {Component} from '@angular/core';

@Component({
    selector: 'ngx-table-header-component',
    template: `
        <button type="button" style="display: inline-block;margin-right: 10px;" class="btn btn-primary btn-icon">
            <i class="nb-plus-circled"></i>
        </button>
        <button type="button" style="display: inline-block;" class="btn btn-danger btn-icon">
            <i class="nb-trash"></i>
        </button>`
    ,
})
export class TablesHeaderComponent {
}
