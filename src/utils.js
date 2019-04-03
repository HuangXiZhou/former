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
 * @param {Object} obj target
 */
export function cloneDeep(obj){
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? cloneDeep(obj[key]) : obj[key];
    }
  }
  return newObj;
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

/**
 * Format preview
 *
 * @param {Function} h createElement function alias
 * @param {String} value element value
 */
export function formatPreviewValue (h, value) {
  return h('p', value);
}

/**
 * Deep search cascader value
 *
 * @param  {...any} args
 */
export function deepSearchCascader (...args) {
  args[2] = args[2] || 0;
  args[3] = args[3] || [];
  args[1].forEach((option) => {
    if (option.value === args[0][args[2]]) {
      if (option.children) {
        deepSearchCascader(args[0], option.children, args[2] + 1, args[3]);
      }
      return args[3].push(option.label);
    };
  });
  return args[3];
}
