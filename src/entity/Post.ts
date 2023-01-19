import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';

@Entity()
export class Post {
    @PrimaryColumn()
    public id!: number;

    @Column('varchar')
    public title!: string;

    @Column('text')
    public content!: string;

    @Column('text')
    public config!: string;

    @OneToMany(() => User, (user) => user.posts)
    public user!: User;

    @CreateDateColumn()
    public createdAt!: Date;

    @UpdateDateColumn()
    public updatedAt!: Date;
}