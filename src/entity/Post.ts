import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    public id!: number;

    @OneToMany(() => User, (user) => user.posts)
    public user!: User;

    @Column('varchar')
    public title!: string;

    @Column('text')
    public content!: string;

    @Column('text')
    public config!: string;

    @CreateDateColumn()
    public createdAt!: Date;

    @UpdateDateColumn()
    public updatedAt!: Date;
}