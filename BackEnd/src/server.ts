import express,{ Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import Routes from './routes';
import ErrorClass from './errors/AppError';
const app=express();
app.use(express.json());
app.use(Routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof ErrorClass) {
        return response.status(err.ErrorCode).json({
            status: 'Error',
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'Error',
        message: 'Internal Server Error',
    });
});
app.listen(3333);
