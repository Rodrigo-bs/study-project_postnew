import { Response, Request } from 'express';

import appDataConfig from '../database/database.config';
import Crypto from '../core/crypto';

import UserModel from '../model/User.model';
import { User } from '../entity/User';
import { Repository } from 'typeorm';

const errorsObject = JSON.parse(JSON.stringify(require('../configs/errors.messages.json'))); 

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
        if (req.params.id == null || req.params.id == undefined) { // id param is null
            return res.status(400).json({
                code: errorsObject.e400.ID_MISSING[0],
                message: errorsObject.e400.ID_MISSING[1],
                customerMessage: errorsObject.e400.ID_MISSING[2]
            });
        }

        if (!Number.isInteger(+req.params.id)) { // id is an invalid format
            return res.status(400).json({
                code: errorsObject.e400.INVALID_FORMAT_ID[0],
                message: errorsObject.e400.INVALID_FORMAT_ID[1],
                customerMessage: errorsObject.e400.INVALID_FORMAT_ID[2]
            });
        }

        const user = await UserModel.selectById(req.params.id);

        if (user == null) { // User not found
            return res.status(406).json({
                code: errorsObject.e406.USER_NOT_FOUND[0],
                message: errorsObject.e406.USER_NOT_FOUND[1],
                customerMessage: errorsObject.e406.USER_NOT_FOUND[2]
            });
        }

        return res.status(200).json(user);
    }
}

export default UserController;