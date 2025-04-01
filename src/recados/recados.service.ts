import { Injectable, NotFoundException } from "@nestjs/common";
import { Recado } from "./entities/recado.entity";
import { CreateRecadoDto } from "./dto/create-recado.dto";
import { UpdateRecadoDto } from "./dto/update-recado.dto";

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
        }
    ];

    throwNotFoundError() {
        throw new NotFoundException('Recado não encontrado.');
    }

    findAll() {
        return this.recados;
    }

    findOne(id: number) {
        const recado = this.recados.find(recado => recado.id === +id);

        if (recado) return recado;

        this.throwNotFoundError();
    }

    create(createRecadoDto: CreateRecadoDto) {
        this.lastId++;
        const id = this.lastId;
        const novoRecado = {
            id,
            ...createRecadoDto,
            lido: false,
            data: new Date(),
        }
        this.recados.push(novoRecado);
        return novoRecado;
    }

    update(id: number, updateRecadoDto: UpdateRecadoDto) {
        const recadoExiste = this.recados.findIndex(recado => recado.id === +id)

        if(recadoExiste < 0) {
            this.throwNotFoundError();
        }

            const recadoExistente = this.recados[recadoExiste]

            console.log('updateRecadoDto', updateRecadoDto)
            this.recados[recadoExiste] = {
                ...recadoExistente,
                ...updateRecadoDto,
            }

        return this.recados[recadoExiste]
    }

    remove(id: number) {
        const recadoExiste = this.recados.findIndex(recado => recado.id === +id)

        recadoExiste < 0 && this.throwNotFoundError();

        const recado = this.recados[recadoExiste];

        this.recados.splice(recadoExiste, 1);

        return recado
    }
}