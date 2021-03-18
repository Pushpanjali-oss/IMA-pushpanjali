/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { incidentService } from '../../sd-services/incidentService';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-deleteincident',
    templateUrl: './deleteincident.template.html'
})

export class deleteincidentComponent extends NBaseComponent implements OnInit {
    incidentId: number;
    constructor(public dialogRef: MatDialogRef<deleteincidentComponent>, @Inject(MAT_DIALOG_DATA) data, public incd: incidentService) {
        super();
        this.incidentId = data;
    }

    ngOnInit() {

    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    deleteIncidentData() {
        let id = {
            id: this.incidentId
        }
        this.incd.deleteInstant(id);
        this.onNoClick();
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
