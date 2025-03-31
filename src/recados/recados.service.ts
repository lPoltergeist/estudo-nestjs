import { Injectable } from "@nestjs/common";
import { Recado } from "./entities/recado.entity";

@Injectable()
export class RecadosServices {
    private lastId = 1;
    private recados: Recado[] = [
        {
            id: 1,
            texto: 'Este é um recado de teste',
            de: 'Joana',
            para: 'Maria',
            lido: false,
            data: new Date(),
        }];

    findAll() {
        return this.recados;
    }

    findOne(id: number) {
        return this.recados.find(recado => recado.id === +id);
    }

    create(body: any) {
        this.lastId++;
        const id = this.lastId;
        const novoRecado = {
            id,
            ...body,
        }
        this.recados.push(novoRecado);
        return novoRecado;
    }

    update(id: number, body: any) {
        const recadoExiste = this.recados.findIndex(recado => recado.id === +id)

        if (recadoExiste >= 0) {
            const recadoExistente = this.recados[recadoExiste]

            this.recados[recadoExiste] = {
                ...recadoExistente,
                ...body,
            }
        }
    }

    remove(id: number) {
        const recadoExiste = this.recados.find(recado => recado.id === +id)
        console.log('recadoExiste', recadoExiste)
        if (recadoExiste) {
            this.recados.splice(this.recados.indexOf(recadoExiste), 1)
        }
    }
}