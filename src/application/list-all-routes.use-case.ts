import { RouteRepositoryInterface } from "../domain/route-repository";
import { LatLng, Route } from "../domain/route.entity";

export class ListAllRoutesUseCase{

    // aqui será a lib que terá que lidar com a interface e não o contrario
    constructor(private routeRepo: RouteRepositoryInterface){}

    //aqui vai processar a criação da rota //com ou sem entrada de dados
    async execute(): Promise<CreateRouteOutput>{
        //ela vai receber dados de entrega e fazer 
        //as operações em cima das entidades
        const routes = await this.routeRepo.findAll();        
        return routes.map(r => r.toJSON());
    }
}

type CreateRouteOutput = {
    id: string;
    title: string;
    startPosition:LatLng;
    endPosition:LatLng;
    paths?: LatLng[]
}[];

//type CreateRouteOutput = Route;
//Single responsability solid
