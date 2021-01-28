import {users} from '../routes/users.routes';
import UsersData from '../interface/UsersDTO';
import ErrorClass from '../errors/AppError';

export default class DeleteUserService{
    public  execute(email:string):void{
        const findUserIndex=users.findIndex(user=>user.email===email);
        if(findUserIndex===-1)
            throw new ErrorClass('E-mail not found!');
        users.splice(findUserIndex,1);
    }
}