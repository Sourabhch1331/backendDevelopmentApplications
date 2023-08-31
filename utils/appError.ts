
class AppError extends Error {
    readonly statusCode:number;
    readonly status:string;
    readonly isOperational:boolean;

    constructor(message:string,statusCode:number){
        super(message);

        this.message=message;
        this.statusCode=statusCode;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail':'error';
        this.isOperational=true;

        Error.captureStackTrace(this,this.constructor);
    }
};

module.exports = AppError;