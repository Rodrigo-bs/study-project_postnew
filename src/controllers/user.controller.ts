import { Response, Request } from 'express';

class User {
    public static test(req: Request, res: Response): void {
        res.send('teste');
    }
}

export default User;