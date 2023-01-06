import { AppDatasource } from '../../../../config/databaseConnection'
import { User } from '../../../../entities/user'

export const saveTokenToDB = (userID: number,token:any) => {
    AppDatasource
        .createQueryBuilder()
        .update(User)
        .set({ token: token })
        .where("id = :id", { id: userID })
        .execute()
}