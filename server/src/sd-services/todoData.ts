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
export class todoData {
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
    this.serviceName = 'todoData';
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
      instance = new todoData(
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
      //appendnew_flow_todoData_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: todoData');

    //appendnew_flow_todoData_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: todoData');

    if (!this.swaggerDocument['paths']['/todoMassege']) {
      this.swaggerDocument['paths']['/todoMassege'] = {
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
      this.swaggerDocument['paths']['/todoMassege']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/todoMassege`,
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
          bh = await this.sd_bchRSVBfa4qk3YcL(bh);
          //appendnew_next_sd_B8SYNaiOoMa1eiDo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_B8SYNaiOoMa1eiDo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_todoData_HttpIn
  }
  //   service flows_todoData

  //appendnew_flow_todoData_start

  async sd_bchRSVBfa4qk3YcL(bh) {
    try {
      bh.local.url = bh.system.environment.todo;

      console.log(bh.local.url);
      bh = await this.sd_1wnDYG8amruWAGp6(bh);
      //appendnew_next_sd_bchRSVBfa4qk3YcL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bchRSVBfa4qk3YcL');
    }
  }

  async sd_1wnDYG8amruWAGp6(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: undefined,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.result = responseMsg;
      await this.sd_1njAmPoQeuWTXo0q(bh);
      //appendnew_next_sd_1wnDYG8amruWAGp6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1wnDYG8amruWAGp6');
    }
  }

  async sd_1njAmPoQeuWTXo0q(bh) {
    try {
      bh.web.res.status(bh.result.statusCode).send(bh.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1njAmPoQeuWTXo0q');
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
  //appendnew_flow_todoData_Catch
}
