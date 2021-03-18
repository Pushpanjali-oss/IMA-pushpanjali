let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class idsutil {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'idsutil';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new idsutil(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh = {
        input: {
          clientInstance: clientInstance,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_8WxijQyebJJj9nrQ(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fhWjbV8LTlOxWdET');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh = {
        input: {
          authParams: authParams,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_5nP8BMxm16YZNipi(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1EUgjUsdh6mcmN0I');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh = {
        input: {
          existingSession: existingSession,
          newSession: newSession,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_MTqn2I2fVqcUpXgT(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bqz5LTMq5SxVkaca');
    }
  }

  //appendnew_flow_idsutil_start

  //__server_service_designer_class_variable_declaration__client
  client: any;
  async sd_8WxijQyebJJj9nrQ(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_tOgXnJy492nsXbuC(bh);
      //appendnew_next_sd_8WxijQyebJJj9nrQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8WxijQyebJJj9nrQ');
    }
  }

  async sd_tOgXnJy492nsXbuC(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Ouh2jf3uOboLsS1T(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_09n3AjfgFqwZT3Le(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tOgXnJy492nsXbuC');
    }
  }

  async sd_Ouh2jf3uOboLsS1T(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000,
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout,
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret'],
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_6cJ1G5bZScmTGxbp(bh);
      //appendnew_next_sd_Ouh2jf3uOboLsS1T
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ouh2jf3uOboLsS1T');
    }
  }

  async sd_6cJ1G5bZScmTGxbp(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_6cJ1G5bZScmTGxbp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6cJ1G5bZScmTGxbp');
    }
  }

  async sd_09n3AjfgFqwZT3Le(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_09n3AjfgFqwZT3Le
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_09n3AjfgFqwZT3Le');
    }
  }

  async sd_5nP8BMxm16YZNipi(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent',
      };
      //appendnew_next_sd_5nP8BMxm16YZNipi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5nP8BMxm16YZNipi');
    }
  }

  async sd_MTqn2I2fVqcUpXgT(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_6RjbQlGgC6CjPisM(bh);
      //appendnew_next_sd_MTqn2I2fVqcUpXgT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MTqn2I2fVqcUpXgT');
    }
  }

  async sd_6RjbQlGgC6CjPisM(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_SXLdz7MXPOwvjWwL(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DzwCc54IUtVutQbC(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6RjbQlGgC6CjPisM');
    }
  }

  async sd_SXLdz7MXPOwvjWwL(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_SXLdz7MXPOwvjWwL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SXLdz7MXPOwvjWwL');
    }
  }

  async sd_DzwCc54IUtVutQbC(bh) {
    try {
      let outputVariables = await this.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_vdzsyBnzpeBi4mRK(bh);
      //appendnew_next_sd_DzwCc54IUtVutQbC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DzwCc54IUtVutQbC');
    }
  }

  async sd_vdzsyBnzpeBi4mRK(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_HQp7CgQZEESxE3Qe(bh);
      //appendnew_next_sd_vdzsyBnzpeBi4mRK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vdzsyBnzpeBi4mRK');
    }
  }

  async sd_HQp7CgQZEESxE3Qe(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DW9NXFNW7LnQprnm(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5OLdNlfZ05Ul4bQB(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HQp7CgQZEESxE3Qe');
    }
  }

  async sd_DW9NXFNW7LnQprnm(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_DW9NXFNW7LnQprnm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DW9NXFNW7LnQprnm');
    }
  }

  async sd_5OLdNlfZ05Ul4bQB(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_5OLdNlfZ05Ul4bQB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5OLdNlfZ05Ul4bQB');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_UKXe822fztYsvPFm(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_UKXe822fztYsvPFm(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_5OLdNlfZ05Ul4bQB(bh);
      //appendnew_next_sd_UKXe822fztYsvPFm
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
