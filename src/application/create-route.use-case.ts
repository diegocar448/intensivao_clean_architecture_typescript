import { RouteRepositoryInterface } from "../domain/route-repository";
import { LatLng, Route } from "../domain/route.entity";

export class CreateRouteUseCase{

    // aqui será a lib que terá que lidar com a interface e não o contrario
    constructor(private routeRepo: RouteRepositoryInterface){

    }

    //aqui vai processar a criação da rota
    async execute(input: CreateRouteInput): Promise<CreateRouteOutput>{
        //ela vai receber dados de entrega e fazer 
        //as operações em cima das entidades
        const route = new Route(input);
        await this.routeRepo.insert(route)
        return route.toJSON();
    }
}



type CreateRouteInput = {
    title: string;
    startPosition:LatLng;
    endPosition:LatLng;
    paths?: LatLng[]
}

type CreateRouteOutput = {
    title: string;
    startPosition:LatLng;
    endPosition:LatLng;
    paths?: LatLng[]
};

//type CreateRouteOutput = Route;

//Single responsability solid
