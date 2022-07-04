import { RouteInMemoryRepository } from "./route-in-memory.repository";
import { Route, RouteProps } from "../../domain/route.entity";

describe('RouteInMemoryRepository Test', () =>{
    it('should insert a new route', async () => {
        const repository = new RouteInMemoryRepository();
        const routeProps: RouteProps = {
            title: 'minharota',
            startPosition: {lat:0, lng: 1},
            endPosition: {lat:2, lng: 1}            
        }
        const route = new Route(routeProps);
        await repository.insert(route);
        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([route]);

    })
})