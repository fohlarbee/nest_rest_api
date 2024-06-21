import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService  extends ConsoleLogger{
    log(message:any, context?: string){
        const entry =`${context}\t${message}\n`;
        
        super.log(message, context);

    }
    error(message:any, stackorContext?: string){
        const entry =`${stackorContext}\t${message}\n`;

        super.log(message, stackorContext);
    }

}
