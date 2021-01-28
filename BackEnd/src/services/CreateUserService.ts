import {hash} from 'bcryptjs';
import {users} from '../routes/users.routes';
import ErrorClass from '../errors/AppError';
import UsersDTO from '../interface/UsersDTO';

export default class CreateUserService{
    public async execute({name,email,password}:UsersDTO):Promise<UsersDTO>{
        const FindEmail= users.find(user=>user.email===email);
        if(FindEmail)
            throw new ErrorClass('This E-mail already exists!');
        const hashedPassword= await hash(password,8);
        const user:UsersDTO={
            name,
            email,
            password:hashedPassword
        }
        users.push(user);
        return user;

    }
}