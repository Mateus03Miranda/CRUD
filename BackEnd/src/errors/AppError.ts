export default class AppError{
    public readonly message:string;
    public readonly ErrorCode:number;
    
    constructor(message:string, ErrorCode=400){
        this.message=message;
        this.ErrorCode=ErrorCode;
    }
}