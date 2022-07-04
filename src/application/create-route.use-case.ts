import { RouteRepositoryInterface } from "../domain/route-repository";
import { LatLng, Route } from "../domain/route.entity";

export class CreateRouteUseCase{

    /////////////////////////////////////////////////////////////////////////////////////////
    //exemplificação se fosse usado um mysql nesse caso
    /////////////////////////////////////////////////////////////////////////////////////////
    // Se acrescentassemos um BD teria uma implementação do MySql por exemplo seria um
    //adaptador do MySql que iria interagir com o meu caso de uso através da porta que é
    //a minha interface
    /////////////////////////////////////////////////////////////////////////////////////////

    // aqui será a lib que terá que lidar com a interface e não o contrario
    constructor(private routeRepo: RouteRepositoryInterface){

    }

    //aqui vai processar a criação da rota //com ou sem entrada de dados
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
    id: string;
    title: string;
    startPosition:LatLng;
    endPosition:LatLng;
    paths?: LatLng[]
};

//type CreateRouteOutput = Route;

//Single responsability solid
