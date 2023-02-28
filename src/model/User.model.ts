import { User } from "../entity/User";

import appDataConfig from '../database/database.config';

import { Repository } from 'typeorm';

class UserModel {
    public static async selectById(id: string) {
        const userId = Number.parseInt(id);

        const userRepository: Repository<User> = appDataConfig.getRepository(User);
        const postCategory: User = await userRepository.manager.findOneBy(User, { id: userId }) as User;

        return postCategory;
    }
}

export default UserModel;