/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder,Validators } from '@angular/forms';
import { incidentService } from '../../sd-services/incidentService';
import * as moment from 'moment';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-editincident',
    templateUrl: './editincident.template.html'
})

export class editincidentComponent extends NBaseComponent implements OnInit {
loginform;
    mindate = new Date;
    editData: any;
    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<editincidentComponent>, public incidentService: incidentService, @Inject(MAT_DIALOG_DATA) data) {
        super();
        this.editData = data;
    }

    ngOnInit() {
        this.loginform = this.fb.group ({
        subject: ['',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
        description: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
        priority: ['',[Validators.required, Validators.pattern('[0-9]+')]],
        date: ['',[Validators.required]]

    });
    }

    onNoClick(): void {
    this.dialogRef.close();
  }

   validateAllFields() {
        Object.keys(this.loginform.controls).forEach(field => {
            const control = this.loginform.get(field)
            control.markAsTouched({onlySlef: true})
        })
    }
  onSubmit() {
        console.log("result", this.loginform.value, this.loginform.value.priority);
        this.validateAllFields();
        if(this.loginform.valid) {
            let incidentData = {
                id: this.editData.incident_id,
                subject : this.loginform.value.subject,
                description : this.loginform.value.description,
                priority : Number(this.loginform.value.priority),
                incidentdate : moment(this.loginform.value.incidentdate).format('MMMM Do YYYY')
            }
            this.incidentService.updateInstant(incidentData);
            this.onNoClick();
    }
}
}
