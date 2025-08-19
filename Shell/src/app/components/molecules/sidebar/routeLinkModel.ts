export class RouteLink {
    title: string;
    route: string;
    icon: string;
    active: boolean;

    constructor(title: string, route: string, icon: string, active: boolean) {
        this.title = title;
        this.route = route;
        this.icon = icon;
        this.active = active;
    }
}