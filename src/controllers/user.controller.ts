import { Response, Request } from 'express';

import appDataConfig from '../database/database.config';
import Crypto from '../core/crypto';

import { User } from '../entity/User';
import { Repository } from 'typeorm';

class UserController {
    public static async create(req: Request, res: Response): Promise<Response> {
        const userInformations = req.body;
        const user: User = new User();

        const passwordInformations = Crypto.encrypt(userInformations.password);

        user.name = userInformations.name;
        user.email = userInformations.email;
        user.password = passwordInformations.hash;
        user.salt = passwordInformations.salt;

        const userRepository: Repository<User> = appDataConfig.getRepository(User);
        await userRepository.save(user);

        return res.json(user);
    }

    public static async selectById(req: Request, res: Response): Promise<Response> {
        const userId = Number.parseInt(req.params.id);
        const userRepository: Repository<User> = appDataConfig.getRepository(User);

        const postCategory: User = await userRepository.manager.findOneBy(User, { id: userId }) as User;
        
        return res.json(postCategory);
    }
}

export default UserController;