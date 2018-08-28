import {EmtpyInterface} from './emtpyInterface';

export class TerminalModel implements EmtpyInterface<TerminalModel>{
    id:string;
    nombreTerminal:string;

    constructor(id: string, nombreTerminal: string) {
        this.id = id;
        this.nombreTerminal = nombreTerminal;
    }
    public static empty():TerminalModel{
        return new TerminalModel("","");
    }

    empty(): TerminalModel {
        return new TerminalModel("","");
    }

    static getString(f: TerminalModel) {
        return f.nombreTerminal;
    }
}
