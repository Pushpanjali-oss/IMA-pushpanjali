/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,  ViewChild } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { incidentService } from '../../sd-services/incidentService';
import { MatDialog } from '@angular/material/dialog';
import {deleteincidentComponent} from '../deleteincidentComponent/deleteincident.component';
import {editincidentComponent} from '../editincidentComponent/editincident.component';
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
    selector: 'bh-incidentdetails',
    templateUrl: './incidentdetails.template.html'
})

export class incidentdetailsComponent extends NBaseComponent implements OnInit {
    incidentData: any;
    searchValue= "";
    
    // incidentData = new MatTableDataSource([
    //     {"id": "1", "subject": "Incident 1", "description": "Incident description 1", "priority": 1, "incidentdate": "03-09-21"},
    //     {"id": "2", "subject": "Incident 2", "description": "Incident description 2", "priority": 1, "incidentdate": "03-10-21"},
    //     {"id": "3", "subject": "Incident 3", "description": "Incident description 3", "priority": 3, "incidentdate": "03-06-21"},
    //     {"id": "4", "subject": "Incident 4", "description": "Incident description 4", "priority": 5, "incidentdate": "03-08-21"},
    //     {"id": "5", "subject": "Incident 5", "description": "Incident description 5", "priority": 7, "incidentdate": "03-04-21"},
    //     {"id": "6", "subject": "Incident 6", "description": "Incident description 6", "priority": 5, "incidentdate": "03-04-21"},
    //     {"id": "7", "subject": "Incident 7", "description": "Incident description 7", "priority": 9, "incidentdate": "03-09-21"},
    //     {"id": "8", "subject": "Incident 8", "description": "Incident description 8", "priority": 2, "incidentdate": "03-09-21"},
    //     {"id": "9", "subject": "Incident 9", "description": "Incident description 9", "priority": 10, "incidentdate": "03-06-21"},
    //     {"id": "10", "subject": "Incident 10", "description": "Incident description 10", "priority": 12, "incidentdate": "03-06-21"},
    // ])

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
    @ViewChild(MatSort) sort: MatSort;

    constructor(public incidentService: incidentService, public deletedialog: MatDialog,public neutrinosOAuthClientService: NeutrinosOAuthClientService) {
        super();
    }

    ngOnInit() {
        this.getAllIncidentData();
        this.accessValidation();
       // this.incidentData.paginator = this.paginator;
        //this.getAllIncidentData();
    }

    filterIncident() {
        console.log("in filter data", this.searchValue);
         if (this.searchValue.length > 1) {
            this.incidentData.filter = this.searchValue.trim().toLocaleLowerCase()
        } else {
            this.incidentData.filter = this.searchValue       
        }
    }

    
    async getAllIncidentData() {
        let incidentdata = (await this.incidentService.getInstant()).local.result;
        this.incidentData = new MatTableDataSource(incidentdata);
        // this.incidentData.paginator = this.paginator;
         this.incidentData.sort = this.sort;
    }

    async updateincident(updatedata) {
        console.log("I am in update func");
        const dialogRef = this.deletedialog.open(editincidentComponent, {
            "data": updatedata
        })
        dialogRef.afterClosed().subscribe(result => {
            this.getAllIncidentData()
        });
    }

    async deleteincident(id) {
        console.log("i am in delete func", id);
        const dialogRef = this.deletedialog.open(deleteincidentComponent, {
            "data": id
        })
        dialogRef.afterClosed().subscribe(result => {
            this.getAllIncidentData()
        });
    }

    accessValidation() {
        if (this.neutrinosOAuthClientService.userInfo.teams.length > 0) {
            this.neutrinosOAuthClientService.userInfo.teams.forEach(elem => {
                if (elem.displayName === 'ima-admins') {
                    // console.log("in admin")
                    this.getAllIncidentData()
                } else if (elem.displayName === 'ima-users') {
                    // console.log("Not admin")
                    this.incd.unauthorized()
                }
            })
        }
    }
}
