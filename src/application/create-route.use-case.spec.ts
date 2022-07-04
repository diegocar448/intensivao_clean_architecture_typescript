import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository";
import {CreateRouteUseCase} from "./create-route.use-case";

describe('CreateRouteUseCase Tests', () => {

    it('should create a new route', async () =>{
        //variavel para criar repositorio em memoria
        const repository = new RouteInMemoryRepository();
        const createUseCase = new CreateRouteUseCase(repository);
        const output = await createUseCase.execute({
            title: 'meu titulo',
            startPosition: {lat: 1, lng:2},
            endPosition: {lat: 3, lng:4},
        });
        
        expect(repository.items).toHaveLength(1)

        //vamos add as validações do teste aqui em expect
        expect(output).toStrictEqual({
            id: repository.items[0].id,
            title: 'meu titulo',
            startPosition: {lat: 1, lng:2},
            endPosition: {lat: 3, lng:4},
            points:[]
        })
    })
}) 