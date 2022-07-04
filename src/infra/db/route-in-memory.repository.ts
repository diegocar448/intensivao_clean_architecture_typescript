
import { RouteRepositoryInterface } from "../../domain/route-repository";
import { Route } from "../../domain/route.entity";

export class RouteInMemoryRepository implements RouteRepositoryInterface{
    items: Route[] = [];
    insert(route: Route): Promise<void> {
        this.items.push(route);
    }

}