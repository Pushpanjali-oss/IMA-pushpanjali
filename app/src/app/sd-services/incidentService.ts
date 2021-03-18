/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class incidentService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_incidentService

  async addInstant(
    subject: any = undefined,
    description: any = undefined,
    priority: any = undefined,
    date: any = undefined,
    ...others
  ) {
    try {
      var bh = {
        input: {
          subject: subject,
          description: description,
          priority: priority,
          date: date,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_4kWErT3qi52gjoeR(bh);
      //appendnew_next_addInstant
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jo2Xxq827pbzkP8H');
    }
  }

  async getInstant(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_d1yePXmuY9GMuh7c(bh);
      //appendnew_next_getInstant
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KECqkfn446UNAkc7');
    }
  }

  async updateInstant(incidentData: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          incidentData: incidentData,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_a7nU1zbrlMOvhueI(bh);
      //appendnew_next_updateInstant
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bUoMF9Ze4diALPLQ');
    }
  }

  async deleteInstant(id: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_JidPEioG5E1p5U0S(bh);
      //appendnew_next_deleteInstant
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LRfDH4W29u3E78y1');
    }
  }

  //appendnew_flow_incidentService_start

  async sd_4kWErT3qi52gjoeR(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `incidentapi/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.addSuccessfull(bh);
      //appendnew_next_sd_4kWErT3qi52gjoeR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4kWErT3qi52gjoeR');
    }
  }

  async addSuccessfull(bh) {
    try {
      this.matSnackBar.open('incident added successfully', 'Close', {
        duration: 4000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = await this.navigateToList(bh);
      //appendnew_next_addSuccessfull
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wt955SSA5o8bUCvY');
    }
  }

  async navigateToList(bh) {
    try {
      const {
        paramObj: qprm,
        path: path,
      } = this.sdService.getPathAndQParamsObj('/incidentpage');
      await this.router.navigate(
        [this.sdService.formatPathWithParams(path, undefined)],
        {
          queryParams: Object.assign(qprm, ''),
        }
      );
      this.addLog(bh);
      //appendnew_next_navigateToList
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nbQjahDLuRSBiav5');
    }
  }

  async addLog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_addLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1Kyfesst5jcmprfR');
    }
  }

  async sd_d1yePXmuY9GMuh7c(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getincidentapi/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.getSuccessfull(bh);
      //appendnew_next_sd_d1yePXmuY9GMuh7c
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d1yePXmuY9GMuh7c');
    }
  }

  async getSuccessfull(bh) {
    try {
      this.matSnackBar.open('Getting all incident  successfully', 'Close', {
        duration: 4000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.getLog(bh);
      //appendnew_next_getSuccessfull
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6cw3vzNtRZTKCv3L');
    }
  }

  async getLog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_getLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kAwHcUsfPFWC7u22');
    }
  }

  async sd_a7nU1zbrlMOvhueI(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updateincidentapi/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.incidentData,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.updateSuccessfull(bh);
      //appendnew_next_sd_a7nU1zbrlMOvhueI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a7nU1zbrlMOvhueI');
    }
  }

  async updateSuccessfull(bh) {
    try {
      this.matSnackBar.open('incident updated successfully', 'Close', {
        duration: 4000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.updateLog(bh);
      //appendnew_next_updateSuccessfull
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZvHDKLmhc73GKmXG');
    }
  }

  async updateLog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_updateLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yLDgdZvwNIji9GlQ');
    }
  }

  async sd_JidPEioG5E1p5U0S(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteapi/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.deleteSuccessfull(bh);
      //appendnew_next_sd_JidPEioG5E1p5U0S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JidPEioG5E1p5U0S');
    }
  }

  async deleteSuccessfull(bh) {
    try {
      this.matSnackBar.open('incident deleted successfully', 'Close', {
        duration: 4000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.deleteLog(bh);
      //appendnew_next_deleteSuccessfull
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2R03kuf7gL2hr6oA');
    }
  }

  async deleteLog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.result);
      //appendnew_next_deleteLog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9SUPkCGoS1kC2noX');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_incidentService_Catch
}
