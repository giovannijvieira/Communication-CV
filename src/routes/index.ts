import { Router } from 'express';

import { comissionRouter } from './comissoes.routes';

const routes = Router();

routes.use('/v1/findcomission', comissionRouter);


export default routes;
