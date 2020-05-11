import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { json } from 'body-parser';
import { connectedUsers } from '../sockets/socket';
import { GraphicData } from '../classes/graphic';

const router = Router();

const graphic = new GraphicData();

// ======================= GRAPHIC ROUTES  =============================
router.get('/graphic', (req: Request, res: Response) => {
    res.json(graphic.getGraphicData());
});

router.post('/graphic', (req: Request, res: Response) => {
    
    const month = req.body.month;
    const units = Number(req.body.units);
    // With postman, it is sent as body x-wwww-form-urlencoded

    graphic.increaseValue(month, units);

    const server = Server.instance;
    server.io.emit('change-graphic-data', graphic.getGraphicData());

    res.json(graphic.getGraphicData());
});

// ======================= FIRST ROUTES  =============================
router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'Everything is ok here!!!'
    });
});

router.post('/messages', (req: Request, res: Response) => {
    const payload = req.body.payload;
    const from    = req.body.from;

    const resPayload = {
        from,
        body: payload
    }

    const server = Server.instance;
    server.io.emit('new-message', resPayload)

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

    const server = Server.instance;
    console.log('Sending private message to: ', id);
    server.io.in(id).emit('private-message', payload);

    res.json({
        ok: true,
        message: 'Came from POST method!!!',
        payload,
        from,
        id
    });
});

// Get active users' IDs
router.get('/users', (req: Request, res: Response) => {
    const server = Server.instance;

    server.io.clients((error: any, clients: string[]) => {
        if (error) {
            return res.json({
                        ok: false,
                        error
                    });
        }

        res.json({
            ok: true,
            clients
        });
    });
});

// Get users with their names
router.get('/users/detail', (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        clients: connectedUsers.loggedUsers()
    });
});

export default router;