import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column('varchar')
    public name!: string;

    @Column('varchar')
    public email!: string;

    @Column('varchar')
    public salt!: string

    @Column('varchar')
    public password!: string

    @OneToMany(() => Post, (post) => post.user)
    public posts!: Post[]

    @CreateDateColumn()
    public createdAt!: Date;

    @UpdateDateColumn()
    public updatedAt!: Date;
}