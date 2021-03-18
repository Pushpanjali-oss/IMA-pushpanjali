/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
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
    selector: 'bh-profilepage',
    templateUrl: './profilepage.template.html'
})

export class profilepageComponent extends NBaseComponent implements OnInit {
userInfo:any;
username:any;
role:any;
name:any;
    constructor(public ser:NeutrinosOAuthClientService) {
        super();
         this.userInfo = this.ser.userInfo;
         console.log("userdetail",this.userInfo);
         this.username=this.userInfo.username;
         this.name=this.userInfo.firstName;
        if(this.userInfo.teams[4].displayName=="ima-users"){
 this.role="User";
         }
         if(this.userInfo.teams[4].displayName=="ima-admins"){
 this.role="Admin";
         }
    }

    ngOnInit() {

    }
}
