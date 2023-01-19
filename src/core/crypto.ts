import crypto from 'crypto';
import dotenv from 'dotenv';

import EncryptType from '../types/crypto/Encrypt.type';
import CredentialsType from '../types/crypto/Credentials.type';

dotenv.config()

export default class Crypto {
    public static encrypt(password: string, salt: string | null = null): EncryptType {
        salt = salt != null ? salt : crypto.randomBytes(16).toString('hex');

        const globalKey: string = process.env.GLOBAL_KEY as string;
        const algorithm: string = process.env.ALGORITHM as string;

        const hash = crypto.createHmac(algorithm, globalKey + salt)
                            .update(password)
                            .digest('hex');

        return {
            hash: hash,
            salt: salt
        };
    }

    public static check(hash: string, credentials: CredentialsType) {
        const hashGenerated: string = this.encrypt(credentials.password, credentials.salt).hash;

        if (hashGenerated === hash) {
            return true;
        } else {
            return false;
        }
    }
}