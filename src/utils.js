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
 * @param {Object} c result
 */
export function cloneDeep (o, c) {
  var c = c || {};

  for (var i in o) {
    if (typeof o[i] === 'object') {
      if (o[i].constructor === Array) {
      c[i] =[];
      } else {
        c[i] = {};
      }
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
 * @param {Any} input
 */
export function checkWhen (input) {
  console.log(input, 2323);
  if (typeof input === 'boolean') return input;

  if (typeof input === 'function') {
    return input();
  }
}

/**
 * Transform UI library name to vue components name
 *
 * @param {String} libraryName UI library name
 */
export function transformUIelName (libraryName) {
  if (libraryName === 'element-ui') {
    return 'el';
  }
  return 'former-custom-';
}
