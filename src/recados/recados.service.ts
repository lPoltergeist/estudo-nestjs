import { Injectable, NotFoundException } from "@nestjs/common";
import { Recado } from "./entities/recado.entity";
import { CreateRecadoDto } from "./dto/create-recado.dto";
import { UpdateRecadoDto } from "./dto/update-recado.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RecadosServices {
    constructor(
        @InjectRepository(Recado)
        private readonly recadoRepository: Repository<Recado>,
    ) { }

    throwNotFoundError() {
        throw new NotFoundException('Recado não encontrado.');
    }

    async findAll() {
        const recados = await this.recadoRepository.find();

        return recados
    }

    async findOne(id: number) {
        const recado = await this.recadoRepository.findOne({
            where: {
                id
            }
        })

        if (recado) return recado;

        this.throwNotFoundError();
    }

    async create(createRecadoDto: CreateRecadoDto) {
        const novoRecado = {
            ...createRecadoDto,
            lido: false,
            data: new Date(),
        }
        const recado = await this.recadoRepository.create(novoRecado);

        await this.recadoRepository.save(recado);
        return novoRecado;
    }

    async update(id: number, updateRecadoDto: UpdateRecadoDto) {
        const partialUpdateRecadoDto = {
            lido: updateRecadoDto?.lido,
            texto: updateRecadoDto?.texto
        }

        const recado = await this.recadoRepository.preload({
            id,
            ...partialUpdateRecadoDto
        });

        console.log('recado', recado)

        if (!recado) {
            throw new NotFoundException('Recado nao encontrado.');

        }

        await this.recadoRepository.save(recado);

        return recado
    }

    async remove(id: number) {
        const recado = await this.recadoRepository.findOneBy({
            id,
        });

        if (!recado) {
            throw new NotFoundException('Recado nao encontrado.');
        }

        return this.recadoRepository.remove(recado);
    }
}