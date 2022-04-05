class Logger {
    filename: string;
    private constructor(filename){
       //create the file.
        this.filename = filename
    }
    level: number;
    static logger: Logger
    log(log: string){
        let newLog = new Date() + ':'+ log;
        // appenfLogtoFile(newLog)
    }
    static getShardLogger() : Logger{
        if (!this.logger){
            this.logger = new Logger('idan.log')
        }   
        return this.logger; 
    }
}
let logger = Logger.getShardLogger();
let ulogger = Logger.getShardLogger();

// singleTone:
//3 things

//1. private contructor
//2.  get Shared
//3.  static member with the same type.