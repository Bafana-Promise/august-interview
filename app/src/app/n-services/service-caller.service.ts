//append_imports_start

import * as sd_DLtkKzL3vBipTPwE from 'app/sd-services/todoList'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(private sd_DLtkKzL3vBipTPwE: sd_DLtkKzL3vBipTPwE.todoList) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
