import { Response, Request } from 'express';

import appDataConfig from '../database/database.config';
import Crypto from '../core/crypto';

import { Post } from '../entity/Post';
import { Repository } from 'typeorm';

class PostController {
    public static async create(req: Request, res: Response): Promise<Response> {
        const postInformations = req.body;
        const post: Post = new Post();

        post.title = postInformations.title;
        post.content = postInformations.content;
        post.config = postInformations.config;

        const postRepository: Repository<Post> = appDataConfig.getRepository(Post);
        await postRepository.save(post);

        return res.json(post);
    }

    public static async selectById(req: Request, res: Response): Promise<Response> {
        const postId = Number.parseInt(req.params.id);
        const postRepository: Repository<Post> = appDataConfig.getRepository(Post);

        const post = await postRepository.manager.findOneBy(Post, { id: postId });

        return res.json(post);
    }
}

export default PostController;