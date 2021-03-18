/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addincidentComponent } from '../addincidentComponent/addincident.component';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-incidentmain',
    templateUrl: './incidentmain.template.html'
})

export class incidentmainComponent extends NBaseComponent implements OnInit {
    constructor(public dialog: MatDialog, public neutrinosOAuthClientService: NeutrinosOAuthClientService) {
        super();
    }
    closeDialog = true;
    ngOnInit() {
        let userinfoData = this.neutrinosOAuthClientService.userInfo;
        console.log("userinfoData", userinfoData);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(addincidentComponent, {
            width: '450px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    logout() {
        //this.neutrinosOAuthClientService.logout();
         this.neutrinosOAuthClientService.logout().then(logoutSuccess => {
            // User logged out
            console.log("You have successfully logged out");
        }).catch(logoutError => {
            // User logout error
            console.log("There is some problem in logout");
        });
    }

    

    
}
