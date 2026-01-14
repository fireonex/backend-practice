import PostService from "./PostService.js";

//controller: работа с клиент-серверной составляющей (params, body, headers)

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture);
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.status(200).json(posts);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)
            res.status(200).json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            await PostService.delete(req.params.id)
            res.status(200).send('ok');
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new PostController;