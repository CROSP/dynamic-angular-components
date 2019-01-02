import {Component, Input, OnInit} from '@angular/core';

import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';
import {AnalyticsService} from '../../../@core/utils/analytics.service';
import {LayoutService} from '../../../@core/data/layout.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
    selector: 'ngx-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    @Input() position = 'normal';

    user: any;
    pageTitle: string;
    userMenu = [{title: 'Profile'}, {title: 'Log out'}];

    constructor(private sidebarService: NbSidebarService,
                private menuService: NbMenuService,
                private activeRoute: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private analyticsService: AnalyticsService,
                private layoutService: LayoutService) {
    }

    ngOnInit() {
        this.subscribeToRouteChangeEvents();
        this.userService.getUsers()
            .subscribe((users: any) => this.user = users.nick);
    }

    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();

        return false;
    }

    toggleSettings(): boolean {
        this.sidebarService.toggle(false, 'settings-sidebar');

        return false;
    }

    goToHome() {
        this.menuService.navigateHome();
    }

    startSearch() {
        this.analyticsService.trackEvent('startSearch');
    }

    private setTitleFromRouteData(routeData) {
        if (routeData && routeData['title']) {
            this.pageTitle = routeData['title'];
        } else {
            this.pageTitle = 'No title';
        }
    }

    private getLatestChild(route) {
        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }

    private subscribeToRouteChangeEvents() {
        // Set initial title
        const latestRoute = this.getLatestChild(this.activeRoute);
        if (latestRoute) {
            this.setTitleFromRouteData(latestRoute.data.getValue());
        }
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activeRoute),
            map((route) => this.getLatestChild(route)),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data),
        ).subscribe((event) => {
            this.setTitleFromRouteData(event);
        });
    }
}
