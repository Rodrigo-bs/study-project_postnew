import { faker } from '@faker-js/faker';
import { User } from '../entity/User';

export default class UserFactory {
    public usersNumber: number;

    constructor(usersNumber: number) {
        this.usersNumber = usersNumber;
    }

    private createRandomUser() {
        const user = new User();
        
        user.name = faker.name.fullName();
        user.email = faker.internet.email(user.name);
        // user.password = 
    }
}