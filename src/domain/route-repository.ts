import { Route } from "./route.entity";

//criamos essa interface para conseguir fazer uma inversão de indenpendencia
export interface RouteRepositoryInterface{
    //repositoy apenas da rota sua unica responsabilidade

    //vamos add o Promise deixando assincrono
    insert(route: Route): Promise<void>
    findAll(): Promise<Route[]>
}

// DIP