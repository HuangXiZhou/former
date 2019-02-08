/**
 * assert
 *
 * @param {Any} v judge
 * @param {String} message err message
 */
export function assert (v, message) {
  if (!v) throw new Error(message);
}

/**
 * cloneDeep
 *
 * @param {Object} o target
 */
export function cloneDeep(o) {
  let c = arguments[1] || {};

  for (let i in o) {
    if (typeof o[i] === 'object') {
      c[i] = o[i] instanceof Array
        ? []
        : {};
      cloneDeep(o[i], c[i]);
    } else {
      c[i] = o[i];
    }
  }

  return c;
}

/**
 * Parse object path
 *
 * @param {Object} obj object
 * @param {String} path path
 */
export function parsePath (obj, path) {
  const bailRE = /[^\w.$]/;
  path = path || '';
  if (bailRE.test(path)) return;
  const segments = path.split('.');
  for (let i = 0; i < segments.length; i++) {
    if (!obj) return;
    obj = obj[segments[i]];
  }
  return obj;
}

/**
 * Check when
 *
 * @param {Any} input input
 * @param {Object} props props
 */
export function checkWhen (input, props) {
  if (typeof input === 'boolean') return input;

  if (typeof input === 'function') {
    return input(props);
  }
}

/**
 * Transform UI library name to vue components name
 *
 * @param {String} libName UI library name
 * @param {String} tag UI component tag 
 */
export function transformUIelName (libName, tag) {
  if (libName === 'element-ui') {
    if (tag === 'FORM') {
      return 'el-form';
    }
    if (tag === 'FORM_ITEM') {
      return 'el-form-item';
    }
  }
  if (libName === 'iview') {
    if (tag === 'FORM') {
      return 'i-form';
    }
    if (tag === 'FORM_ITEM') {
      return 'form-item';
    }
  }
  return 'div';
}
