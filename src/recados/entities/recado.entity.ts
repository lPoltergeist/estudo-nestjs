import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('recados')
export class Recado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    texto: string;

    @Column({ type: 'varchar', length: 255 })
    de: string;

    @Column({ type: 'varchar', length: 255 })
    para: string;

    @Column({default: false})
    lido: boolean;

    @Column()
    data: Date;
}