/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class todoList {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_todoList

  async getTodos(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_4F8wa7gAx3ivlwO7(bh);
      //appendnew_next_getTodos
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
      return await this.errorHandler(bh, e, 'sd_liSW3tXD2XAHsRKe');
    }
  }

  //appendnew_flow_todoList_start

  async sd_4F8wa7gAx3ivlwO7(bh) {
    try {
      console.log(bh.local, 'Service');
      bh = await this.sd_IIWyOzSVr5c8caRB(bh);
      //appendnew_next_sd_4F8wa7gAx3ivlwO7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4F8wa7gAx3ivlwO7');
    }
  }

  async sd_IIWyOzSVr5c8caRB(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/todoData',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_WNdH2X1yZ5GerVoC(bh);
      //appendnew_next_sd_IIWyOzSVr5c8caRB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IIWyOzSVr5c8caRB');
    }
  }

  async sd_WNdH2X1yZ5GerVoC(bh) {
    try {
      console.log(bh);
      //appendnew_next_sd_WNdH2X1yZ5GerVoC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WNdH2X1yZ5GerVoC');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_todoList_Catch
}
