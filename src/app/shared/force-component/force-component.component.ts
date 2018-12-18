import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ForceChangeDialogComponent} from "./force-change-dialog/force-change-dialog.component";

@Component({
    selector: 'swc-force-component',
    templateUrl: './force-component.component.html',
    styleUrls: ['./force-component.component.css']
})
export class ForceComponent implements OnInit {

    @Input() forceStrength: number;
    @Output() onForceChange: EventEmitter<number> = new EventEmitter();

    constructor(private dialog: MatDialog) { }


    ngOnInit() {

    }

    onForceClick(){
        this.dialog.open(ForceChangeDialogComponent, {
            width: "400px"
        });
        console.log("It works");
    }

    get width(): number{
        return this.forceStrength * 12;
    }



}
