
export class Serie {
    codigo:number
    nombre: string;
    canal: string;
    descripcion: string;
    linkSitio: string;
    temporadas: number;
    linkImagen: string;
    constructor(codigo: number, nombre: string, canal: string, descripcion:string, linkSitio:string, temporadas: number, linkImagen: string) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.canal = canal;
        this.descripcion = descripcion;
        this.linkSitio = linkSitio;
        this.temporadas = temporadas;
        this.linkImagen = linkImagen;
    }
}

