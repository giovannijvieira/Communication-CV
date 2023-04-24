import BaseApi from '../api/basecv';
import { AppError} from '../errors/AppError'
import { Router, urlencoded } from 'express';


const comissionRouter = Router();


comissionRouter.post('', async (request,response) =>{

    const {
      findComission
    } = request.body;
console.log(findComission);
   /* try {
        await BaseApi.get(
          `/v1/cv/comissoes?cancelados_excluidos=false&id_comissao_cv=${findComission}`,{
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Connection': `keep-alive`,
              'Token': '589aa2891e82a9fde825d587039bc0d638708b37',
              'Email': 'giovanni.vieira@webropay.com.br'
            },
          },
        );
      } catch (error) {
        console.log(error);
        throw new AppError('Erro ao buscar comissão')
      }*/
    }
)

export {comissionRouter};
