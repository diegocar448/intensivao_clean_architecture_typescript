import { ListAllRoutesUseCase } from './../../../application/list-all-routes.use-case';
import express, {Express, Request, Response} from 'express'; 
import { CreateRouteUseCase } from '../../../application/create-route.use-case';
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository';

const app: Express = express();

app.use(express.json());
//criamos a porta aqui | add uma porta ou caso não tenha usará a porta 3000 mesmo
const port = process.env.PORT || 3000;

//ja gera repositorio externo aqui para manter a memoria dele
const routeRepo = new RouteInMemoryRepository();


app.get('/routes', async(_req: Request, res: Response) => {
    //aqui vamos criar a instancia do caso de uso
    const listAllUseCase = new ListAllRoutesUseCase(routeRepo);
    //agora chamamos o caso de uso
    const output = await listAllUseCase.execute(_req.body);
    res.json(output);
});

app.post('/routes', async (req: Request, res: Response) => {
    //aqui vamos criar a instancia do caso de uso
    const createUseCase = new CreateRouteUseCase(routeRepo);
    //agora chamamos o caso de uso
    const output = await createUseCase.execute(req.body)
    //retorna a res com statusCode 201
    res.status(201).json(output);
});

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});