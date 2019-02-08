import { createFormControl as createElementUIFormControl } from './element-ui/controls.js';
import { createFormControl as createIviewFormControl } from './iview/controls.js';
export default { 
  'element-ui': createElementUIFormControl,
  'iview': createIviewFormControl
};
