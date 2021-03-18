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
import * as sd_sOxsrtEFnbJKXNak from './idsutil'; //_splitter_
//append_imports_end
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_Z05itNnQxM6wCEzR(bh);
          //appendnew_next_sd_3GbwAPv8Tn22tA6W
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3GbwAPv8Tn22tA6W');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_xr6VyRUwUWBp5Dgt(bh);
          //appendnew_next_sd_j9rtrIYOBMpMmGUp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_j9rtrIYOBMpMmGUp');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_yehBKnYi4PTx8VXL(bh);
          //appendnew_next_sd_DwnwsN34XbTSRvow
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DwnwsN34XbTSRvow');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_PXymnfOm5evpmwkr(bh);
          //appendnew_next_sd_aAe18ooQ4lViCpRn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aAe18ooQ4lViCpRn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_YG7H9LMnX05nH85L(bh);
          //appendnew_next_sd_0MN9OzAN7PGn8mPE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0MN9OzAN7PGn8mPE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_26rNT0QlggOycRfU(bh);
          //appendnew_next_sd_08BrgeqsMWWycrT3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_08BrgeqsMWWycrT3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_7JFG8ahN8U4yYdOK(bh);
          //appendnew_next_sd_9ZO0Cv5Qbva8QWkR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9ZO0Cv5Qbva8QWkR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_yehBKnYi4PTx8VXL(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_0MVnfCjzlfOMRz7X(bh);
      //appendnew_next_sd_yehBKnYi4PTx8VXL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yehBKnYi4PTx8VXL');
    }
  }

  async sd_0MVnfCjzlfOMRz7X(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_U0TbZq5Vf7AFWTlN(bh);
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
        bh = await this.sd_w4zYOLCEdVAqIDJC(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0MVnfCjzlfOMRz7X');
    }
  }

  async sd_U0TbZq5Vf7AFWTlN(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      bh = await this.sd_iZKLVJLJghg3Nm4L(bh);
      //appendnew_next_sd_U0TbZq5Vf7AFWTlN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U0TbZq5Vf7AFWTlN');
    }
  }

  async sd_iZKLVJLJghg3Nm4L(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_PoxPDpsPcAU38KDl(bh);
      //appendnew_next_sd_iZKLVJLJghg3Nm4L
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iZKLVJLJghg3Nm4L');
    }
  }

  async sd_PoxPDpsPcAU38KDl(bh) {
    try {
      const sd_sOxsrtEFnbJKXNakInstance: sd_sOxsrtEFnbJKXNak.idsutil = sd_sOxsrtEFnbJKXNak.idsutil.getInstance();
      let outputVariables = await sd_sOxsrtEFnbJKXNakInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_UMd3A3dco4j4pxhX(bh);
      //appendnew_next_sd_PoxPDpsPcAU38KDl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PoxPDpsPcAU38KDl');
    }
  }

  async sd_UMd3A3dco4j4pxhX(bh) {
    try {
      const sd_sOxsrtEFnbJKXNakInstance: sd_sOxsrtEFnbJKXNak.idsutil = sd_sOxsrtEFnbJKXNak.idsutil.getInstance();
      let outputVariables = await sd_sOxsrtEFnbJKXNakInstance.getAuthorizationParams(
        null
      );
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_J0EwWgrC3FzedzrT(bh);
      //appendnew_next_sd_UMd3A3dco4j4pxhX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UMd3A3dco4j4pxhX');
    }
  }

  async sd_J0EwWgrC3FzedzrT(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      await this.sd_0aRDOGweSjyg0gZ1(bh);
      //appendnew_next_sd_J0EwWgrC3FzedzrT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J0EwWgrC3FzedzrT');
    }
  }

  async sd_0aRDOGweSjyg0gZ1(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0aRDOGweSjyg0gZ1');
    }
  }

  async sd_w4zYOLCEdVAqIDJC(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      await this.sd_cK1VV7QpcRuvfRQs(bh);
      //appendnew_next_sd_w4zYOLCEdVAqIDJC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w4zYOLCEdVAqIDJC');
    }
  }

  async sd_cK1VV7QpcRuvfRQs(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cK1VV7QpcRuvfRQs');
    }
  }

  async sd_Z05itNnQxM6wCEzR(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_8ZY0opxBSLcC9CAi(bh);
      //appendnew_next_sd_Z05itNnQxM6wCEzR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z05itNnQxM6wCEzR');
    }
  }

  async sd_8ZY0opxBSLcC9CAi(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8ZY0opxBSLcC9CAi');
    }
  }

  async sd_PXymnfOm5evpmwkr(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_sruJRzmGjZb5W5iL(bh);
      //appendnew_next_sd_PXymnfOm5evpmwkr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PXymnfOm5evpmwkr');
    }
  }

  async sd_sruJRzmGjZb5W5iL(bh) {
    try {
      const sd_sOxsrtEFnbJKXNakInstance: sd_sOxsrtEFnbJKXNak.idsutil = sd_sOxsrtEFnbJKXNak.idsutil.getInstance();
      let outputVariables = await sd_sOxsrtEFnbJKXNakInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_9qhSLNsiWGPohvF0(bh);
      //appendnew_next_sd_sruJRzmGjZb5W5iL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sruJRzmGjZb5W5iL');
    }
  }

  async sd_9qhSLNsiWGPohvF0(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_6eUFrjhVzWiKOgR7(bh);
      //appendnew_next_sd_9qhSLNsiWGPohvF0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9qhSLNsiWGPohvF0');
    }
  }

  async sd_6eUFrjhVzWiKOgR7(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_j7RM6Re8NER3V8yV(bh);
      //appendnew_next_sd_6eUFrjhVzWiKOgR7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6eUFrjhVzWiKOgR7');
    }
  }

  async sd_j7RM6Re8NER3V8yV(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1z6p8MAhrqXGFR8V(bh);
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
        bh = await this.sd_XKB7H6Xjg9rN5Xbz(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j7RM6Re8NER3V8yV');
    }
  }

  async sd_1z6p8MAhrqXGFR8V(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_kPj9rO3sXuLYOyZ7(bh);
      //appendnew_next_sd_1z6p8MAhrqXGFR8V
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1z6p8MAhrqXGFR8V');
    }
  }

  async sd_kPj9rO3sXuLYOyZ7(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kPj9rO3sXuLYOyZ7');
    }
  }

  async sd_XKB7H6Xjg9rN5Xbz(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      await this.sd_g4buUoXsSuYJOGSp(bh);
      //appendnew_next_sd_XKB7H6Xjg9rN5Xbz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XKB7H6Xjg9rN5Xbz');
    }
  }

  async sd_g4buUoXsSuYJOGSp(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g4buUoXsSuYJOGSp');
    }
  }

  async sd_YG7H9LMnX05nH85L(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_15yqN5Pd9Kz98K7o(bh);
      //appendnew_next_sd_YG7H9LMnX05nH85L
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YG7H9LMnX05nH85L');
    }
  }

  async sd_15yqN5Pd9Kz98K7o(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_15yqN5Pd9Kz98K7o');
    }
  }

  async sd_X2GtQesEMJyRCGkI(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_X2GtQesEMJyRCGkI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X2GtQesEMJyRCGkI');
    }
  }

  async sd_26rNT0QlggOycRfU(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_OCIAV5M9vfCm3JVd(bh);
      //appendnew_next_sd_26rNT0QlggOycRfU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_26rNT0QlggOycRfU');
    }
  }

  async sd_OCIAV5M9vfCm3JVd(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_cbCkOQrQB3yFLiYX(bh);
      //appendnew_next_sd_OCIAV5M9vfCm3JVd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OCIAV5M9vfCm3JVd');
    }
  }

  async sd_cbCkOQrQB3yFLiYX(bh) {
    try {
      const sd_sOxsrtEFnbJKXNakInstance: sd_sOxsrtEFnbJKXNak.idsutil = sd_sOxsrtEFnbJKXNak.idsutil.getInstance();
      let outputVariables = await sd_sOxsrtEFnbJKXNakInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_DjvCwgCSn8WPrbh5(bh);
      //appendnew_next_sd_cbCkOQrQB3yFLiYX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cbCkOQrQB3yFLiYX');
    }
  }

  async sd_DjvCwgCSn8WPrbh5(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_mucvH9v3DhSGsese(bh);
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
        bh = await this.sd_g6NWWB2PnDuJi0L1(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DjvCwgCSn8WPrbh5');
    }
  }

  async sd_mucvH9v3DhSGsese(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_mucvH9v3DhSGsese
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mucvH9v3DhSGsese');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_TvWB7TwSc58a6Jbs(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_TvWB7TwSc58a6Jbs(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TvWB7TwSc58a6Jbs');
    }
  }

  async sd_g6NWWB2PnDuJi0L1(bh) {
    try {
      bh.local.res = {
        sessionExists: false,
      };
      await this.sd_TvWB7TwSc58a6Jbs(bh);
      //appendnew_next_sd_g6NWWB2PnDuJi0L1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g6NWWB2PnDuJi0L1');
    }
  }

  async sd_7JFG8ahN8U4yYdOK(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_V9ZZeenAut5SwJ5u(bh);
      //appendnew_next_sd_7JFG8ahN8U4yYdOK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7JFG8ahN8U4yYdOK');
    }
  }

  async sd_V9ZZeenAut5SwJ5u(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_rXEVBRnEJLAD0B9w(bh);
      //appendnew_next_sd_V9ZZeenAut5SwJ5u
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V9ZZeenAut5SwJ5u');
    }
  }

  async sd_rXEVBRnEJLAD0B9w(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sswctfXB39xlherT(bh);
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
        bh = await this.sd_NJT4A3mZ1f7JinhQ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rXEVBRnEJLAD0B9w');
    }
  }

  async sd_sswctfXB39xlherT(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_iEC932Af1gQimqir(bh);
      //appendnew_next_sd_sswctfXB39xlherT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sswctfXB39xlherT');
    }
  }

  async sd_iEC932Af1gQimqir(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iEC932Af1gQimqir');
    }
  }

  async sd_NJT4A3mZ1f7JinhQ(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      await this.sd_UZLpd10GAzixmm9Q(bh);
      //appendnew_next_sd_NJT4A3mZ1f7JinhQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NJT4A3mZ1f7JinhQ');
    }
  }

  async sd_UZLpd10GAzixmm9Q(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UZLpd10GAzixmm9Q');
    }
  }

  async sd_xr6VyRUwUWBp5Dgt(bh) {
    try {
      bh.local = {};
      bh = await this.sd_26AQV7vYME1Azrrg(bh);
      //appendnew_next_sd_xr6VyRUwUWBp5Dgt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xr6VyRUwUWBp5Dgt');
    }
  }

  async sd_26AQV7vYME1Azrrg(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_eDxQZrO7hZ5CfK6q(bh);
      //appendnew_next_sd_26AQV7vYME1Azrrg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_26AQV7vYME1Azrrg');
    }
  }

  async sd_eDxQZrO7hZ5CfK6q(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_c9tLFW8g57VsvS4R(bh);
      //appendnew_next_sd_eDxQZrO7hZ5CfK6q
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eDxQZrO7hZ5CfK6q');
    }
  }

  async sd_c9tLFW8g57VsvS4R(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QlAr3F0KbISFTlom(bh);
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
        bh = await this.sd_wCSDJggjgCY11BKn(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c9tLFW8g57VsvS4R');
    }
  }

  async sd_QlAr3F0KbISFTlom(bh) {
    try {
      const sd_sOxsrtEFnbJKXNakInstance: sd_sOxsrtEFnbJKXNak.idsutil = sd_sOxsrtEFnbJKXNak.idsutil.getInstance();
      let outputVariables = await sd_sOxsrtEFnbJKXNakInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_F1lthOwiBYOZvATv(bh);
      //appendnew_next_sd_QlAr3F0KbISFTlom
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QlAr3F0KbISFTlom');
    }
  }

  async sd_F1lthOwiBYOZvATv(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_VSsvke78tl6BiM0z(bh);
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
        bh = await this.sd_uuO04qOdaTGm2Hte(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F1lthOwiBYOZvATv');
    }
  }

  async sd_VSsvke78tl6BiM0z(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_pwCnycaE5RkjzqVt(bh);
      //appendnew_next_sd_VSsvke78tl6BiM0z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VSsvke78tl6BiM0z');
    }
  }

  async sd_pwCnycaE5RkjzqVt(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      await this.sd_RLMZ5Sw3Gkdwe48e(bh);
      //appendnew_next_sd_pwCnycaE5RkjzqVt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pwCnycaE5RkjzqVt');
    }
  }

  async sd_RLMZ5Sw3Gkdwe48e(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RLMZ5Sw3Gkdwe48e');
    }
  }

  async sd_uuO04qOdaTGm2Hte(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1GgFjlVwlZGTveK1(bh);
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
        bh = await this.sd_9wF5nOng0WfwUyrV(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uuO04qOdaTGm2Hte');
    }
  }

  async sd_1GgFjlVwlZGTveK1(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_TfW68TNHE2hyaD9x(bh);
      //appendnew_next_sd_1GgFjlVwlZGTveK1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1GgFjlVwlZGTveK1');
    }
  }

  async sd_TfW68TNHE2hyaD9x(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_9wF5nOng0WfwUyrV(bh);
      //appendnew_next_sd_TfW68TNHE2hyaD9x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TfW68TNHE2hyaD9x');
    }
  }

  async sd_9wF5nOng0WfwUyrV(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9wF5nOng0WfwUyrV');
    }
  }

  async sd_wCSDJggjgCY11BKn(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_niRAaRMF7Mbsf0PV(bh);
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
        bh = await this.sd_e9hge8gI4eHAxH04(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wCSDJggjgCY11BKn');
    }
  }

  async sd_niRAaRMF7Mbsf0PV(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_RLMZ5Sw3Gkdwe48e(bh);
      //appendnew_next_sd_niRAaRMF7Mbsf0PV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_niRAaRMF7Mbsf0PV');
    }
  }

  async sd_e9hge8gI4eHAxH04(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_RLMZ5Sw3Gkdwe48e(bh);
      //appendnew_next_sd_e9hge8gI4eHAxH04
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e9hge8gI4eHAxH04');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_Kc9pVJRzOUou4xBY(bh)) ||
      (await this.sd_c2npXW4VJIG6uudj(bh))
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
  async sd_Kc9pVJRzOUou4xBY(bh) {
    const nodes = [
      'sd_UMd3A3dco4j4pxhX',
      'sd_aAe18ooQ4lViCpRn',
      'sd_sruJRzmGjZb5W5iL',
      'sd_9qhSLNsiWGPohvF0',
      'sd_PXymnfOm5evpmwkr',
      'sd_j7RM6Re8NER3V8yV',
      'sd_1z6p8MAhrqXGFR8V',
      'sd_XKB7H6Xjg9rN5Xbz',
      'sd_kPj9rO3sXuLYOyZ7',
      'sd_g4buUoXsSuYJOGSp',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_X2GtQesEMJyRCGkI(bh);
      //appendnew_next_sd_Kc9pVJRzOUou4xBY
      return true;
    }
    return false;
  }
  async sd_c2npXW4VJIG6uudj(bh) {
    const nodes = ['sd_QlAr3F0KbISFTlom'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_pwCnycaE5RkjzqVt(bh);
      //appendnew_next_sd_c2npXW4VJIG6uudj
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
