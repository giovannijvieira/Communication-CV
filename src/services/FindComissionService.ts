import { ptBR } from 'date-fns/locale';
import { response } from 'express';
import { AppError } from '../errors/AppError';


interface Request{
    findComission : number;
}

class findComissionService {
    public async execute({
        findComission
    }: Request): Promise<void> {

    }

}
