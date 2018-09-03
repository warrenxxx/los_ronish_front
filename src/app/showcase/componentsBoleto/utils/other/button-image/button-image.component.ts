import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-button-image',
    templateUrl: './button-image.component.html',
    styleUrls: ['./button-image.component.css']
})
export class ButtonImageComponent implements OnInit,OnChanges {

    constructor() {
    }
    @Input()
    img='asiento4.png';

    item = {
        img1: 'asiento1.png',
        img2: 'asiento2.png',
        img3: 'asiento3.png',
        img4: 'asiento4.png'
    };
    @Input()
    isActive:boolean=false;
    @Input()
    id=0;

    @Input()
    diseable:boolean=false;

    @Output() enviar = new EventEmitter();

    ngOnInit() {
        if(this.isActive)
            this.img=this.item.img2;
        else
            this.img=this.item.img4;
    }


    cambio() {
        this.isActive=!this.isActive;
        this.enviar.emit({
            id:this.id,
            isActive:this.isActive
        });
    }

    mouseEnter() {
        if( !this.isActive)
            this.img=this.item.img2;
    }

    mouseLeave() {
        if( !this.isActive)
            this.img=this.item.img4;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.isActive)
            this.img=this.item.img4;
        else
            this.img=this.item.img2;
    }
}
