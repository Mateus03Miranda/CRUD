import { Router} from 'express';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
const usersRouter= Router();

interface UsersData{
    name:string;
    email:string;
    password:string;
}

export const users:UsersData[]=[];

usersRouter.get('/',(request,response)=>{
    return response.json(users);
});

usersRouter.post('/',async(request,response)=>{
    const {name, email, password}=request.body;
    const userService= new CreateUserService();
    const userCreated=await userService.execute({name,email,password});
    return response.json(userCreated);
});

usersRouter.delete('/',(request,response)=>{
    const {email}=request.body;
    const userService= new DeleteUserService();
    userService.execute(email);
    return response.status(204).json();
});
export default usersRouter;