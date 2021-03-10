/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder,Validators } from '@angular/forms';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-addincident',
    templateUrl: './addincident.template.html'
})

export class addincidentComponent extends NBaseComponent implements OnInit {
    loginform;
    mindate = new Date;

    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<addincidentComponent>) {
        super();
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
        console.log("result", this.loginform.value);
        this.validateAllFields()
        if(this.loginform.valid) {
            console.log("Data", this.loginform.value)
        } else {
            console.log("Invalid form data")
        }
    }
}
