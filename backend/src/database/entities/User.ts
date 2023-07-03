import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column("text")
    firstName: string
    @Column("text")
    lastName: string
    @Column("text")
    password: string
    @Column("text", {unique: true})
    email: string
}

