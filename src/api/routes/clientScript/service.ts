import { AppDatasource } from '../../../database/databaseConnection'
import { ClientScript } from '../../../entities/clientScript'
import { FindOneOptions } from 'typeorm'


export const findOne = async (token: string) => {
    const param: FindOneOptions = { where: [{ token: token }] }
  
    const clientScript: ClientScript = await AppDatasource.manager.findOne(ClientScript, param)

    const convertScript = Buffer.from(clientScript.script).toString('utf8');

    return ({...clientScript, script: convertScript});
  }
