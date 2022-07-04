import crypto from 'crypto';

export type LatLng = {lat:number, lng: number};

export type RouteProps = {
    title:string; 
    startPosition: LatLng; 
    endPosition: LatLng; 
    points?: LatLng[]; 
};

export class Route {
    //apenas flag como apenas leitura
    public readonly id: string;
    public props: Required<RouteProps>;
    //id segundo parâmetro não obrigatorio
    constructor( props: RouteProps, id?: string ){   
        this.id = id || crypto.randomUUID();      
        this.props = {
            ...props,
            points: props.points || [],
        };
    }

    updateTitle(title: string){
        this.title = title
        //mudar pra maiusculo
        //valor alguns caracteres
        //validacoes
    }

    updatePosition(startPosition: LatLng, endPosition:LatLng){
        this.startPosition = startPosition;
        this.endPosition = endPosition;
        //mudar pra maiusculo
        //valor alguns caracteres
        //validacoes
    }

    updatePoints(points: LatLng[]){
        this.points = points;
        //mudar pra maiusculo
        //valor alguns caracteres
        //validacoes
    }

    

    //get/set
    get title(){
        return this.props.title;
    }
    private set title(value: string){
        this.props.title = value;
    }

    get startPosition(){
        return this.props.startPosition;
    }
    private set startPosition(value: LatLng){
        this.props.startPosition = value;
    }

    get endPosition(){
        return this.props.endPosition;
    }
    private set endPosition(value: LatLng){
        this.props.endPosition = value;
    }

    get points(){
        return this.props.points;
    }
    private set points(value: LatLng[]){
        this.props.points = value;
    }

    //aqui ele vai retornar as propriedades
    toJSON(){
        return {
            id: this.id,
            ...this.props,
        }
        
    }
}


