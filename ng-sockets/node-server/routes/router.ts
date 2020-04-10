import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'Everything is ok here!!!'
    });
});

router.post('/messages', (req: Request, res: Response) => {
    const payload = req.body.payload;
    const from    = req.body.from;

    res.json({
        ok: true,
        message: 'Came from POST method!!!',
        payload,
        from
    });
});

router.post('/messages/:id', (req: Request, res: Response) => {
    const payload = req.body.payload;
    const from    = req.body.from;
    const id      = req.params.id;

    res.json({
        ok: true,
        message: 'Came from POST method!!!',
        payload,
        from,
        id
    });
});

export default router;