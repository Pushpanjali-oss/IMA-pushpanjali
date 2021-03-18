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
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class incidentServer {
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
    this.serviceName = 'incidentServer';
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
      instance = new incidentServer(
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
      //appendnew_flow_incidentServer_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: incidentServer');

    //appendnew_flow_incidentServer_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: incidentServer');

    if (!this.swaggerDocument['paths']['/incidentapi']) {
      this.swaggerDocument['paths']['/incidentapi'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/incidentapi']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/incidentapi`,
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
          bh = await this.insertquery(bh);
          //appendnew_next_sd_4qZ5OTKksXNs1M2g
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4qZ5OTKksXNs1M2g');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getincidentapi']) {
      this.swaggerDocument['paths']['/getincidentapi'] = {
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
      this.swaggerDocument['paths']['/getincidentapi']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getincidentapi`,
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
          bh = await this.getIncidentquery(bh);
          //appendnew_next_sd_EcZxsbvTfzPLrZw0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EcZxsbvTfzPLrZw0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateincidentapi']) {
      this.swaggerDocument['paths']['/updateincidentapi'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/updateincidentapi']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateincidentapi`,
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
          bh = await this.updatequeryincident(bh);
          //appendnew_next_sd_jw9htBsqsybWNEZX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jw9htBsqsybWNEZX');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteapi']) {
      this.swaggerDocument['paths']['/deleteapi'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteapi']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/deleteapi`,
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
          bh = await this.deleteincidentquery(bh);
          //appendnew_next_sd_ZEoiOWfw7Ss5Gekv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZEoiOWfw7Ss5Gekv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_incidentServer_HttpIn
  }
  //   service flows_incidentServer

  //appendnew_flow_incidentServer_start

  async insertquery(bh) {
    try {
      //console.log("input body data", bh.input.body);
      bh.input.query =
        'INSERT INTO incident (subject, description, priority, incidentdate) values (' +
        "'" +
        bh.input.body.subject +
        "'," +
        "'" +
        bh.input.body.description +
        "'," +
        bh.input.body.priority +
        ',' +
        "'" +
        bh.input.body.incidentdate +
        "')";
      //bh.input.query = 'INSERT INTO incident (subject, description, priority, incidentdate) values (`{}`)

      console.log('Input data', bh.input.query);

      bh = await this.sd_rietOzUNcG7GXgGh(bh);
      //appendnew_next_insertquery
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jGcvqsGgCVjId3dL');
    }
  }

  async sd_rietOzUNcG7GXgGh(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OuJFv8EiVhAsk28P'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.query,
        params
      );
      await this.addincidentres(bh);
      //appendnew_next_sd_rietOzUNcG7GXgGh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rietOzUNcG7GXgGh');
    }
  }

  async addincidentres(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dzXuMboftct5xktG');
    }
  }

  async getIncidentquery(bh) {
    try {
      bh.input.query = 'SELECT * FROM  incident ORDER BY incident_id DESC';
      console.log('get query', bh.input.query);
      bh = await this.sd_Xx5sCITxyPjM5VWJ(bh);
      //appendnew_next_getIncidentquery
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TduBMTjhBBAs4FAM');
    }
  }

  async sd_Xx5sCITxyPjM5VWJ(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OuJFv8EiVhAsk28P'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.query,
        params
      );
      await this.getincidentres(bh);
      //appendnew_next_sd_Xx5sCITxyPjM5VWJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Xx5sCITxyPjM5VWJ');
    }
  }

  async getincidentres(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HXti5EtgJj6MQ93A');
    }
  }

  async updatequeryincident(bh) {
    try {
      bh.input.query =
        "UPDATE incident SET subject = '" +
        bh.input.body.subject +
        "', description = '" +
        bh.input.body.description +
        "', priority = " +
        bh.input.body.priority +
        ", incidentdate = '" +
        bh.input.body.incidentdate +
        "' WHERE (incident_id = " +
        bh.input.body.id +
        ')';

      console.log('Input data', bh.input.query);

      bh = await this.sd_8HLpghUajArsFerT(bh);
      //appendnew_next_updatequeryincident
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J2qrsggV55kLsF3v');
    }
  }

  async sd_8HLpghUajArsFerT(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OuJFv8EiVhAsk28P'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.query,
        params
      );
      await this.updateincidentres(bh);
      //appendnew_next_sd_8HLpghUajArsFerT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8HLpghUajArsFerT');
    }
  }

  async updateincidentres(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DBRvOdFDcEj1FCOG');
    }
  }

  async deleteincidentquery(bh) {
    try {
      bh.input.query =
        'DELETE FROM incident  WHERE incident_id = ' + bh.input.body.id;
      bh = await this.sd_ZHhatl38RHDHe7ql(bh);
      //appendnew_next_deleteincidentquery
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UwzgN9qdBc9CJgdP');
    }
  }

  async sd_ZHhatl38RHDHe7ql(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OuJFv8EiVhAsk28P'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.query,
        params
      );
      await this.deleteincident(bh);
      //appendnew_next_sd_ZHhatl38RHDHe7ql
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZHhatl38RHDHe7ql');
    }
  }

  async deleteincident(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2HajHxs7FwLbxNYB');
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
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_incidentServer_Catch
}
