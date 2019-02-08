import * as utils from '../src/utils';

describe('Utils', () => {
  it('Assert', () => {
    expect(() => utils.assert(false, '')).toThrow();
  });

  it('CloneDeep', () => {
    const obj = { foo: { bar: 0 } };
    const objClone = utils.cloneDeep(obj);
    obj.foo.bar ++;
    expect(objClone).toMatchObject({ foo: { bar: 0 } });
  });

  it('ParsePath', () => {
    const obj = { foo: { bar: 0 } };
    expect(utils.parsePath(obj, 'foo.bar')).toBe(0);
    expect(utils.parsePath(obj, 'foo.bar.foo')).toBeUndefined();
    expect(utils.parsePath(obj)).toBeUndefined();
    expect(utils.parsePath(obj, 'foo/bar')).toBeUndefined();
  });

  it('CheckWhen', () => {
    const noop = () => {};
    expect(utils.checkWhen(false)).toBeFalsy();
    expect(utils.checkWhen(noop)).toBeUndefined();
  });

  it('TransformUIelName', () => {
    expect(utils.transformUIelName('element-ui', 'FORM')).toBe('el-form');
    expect(utils.transformUIelName('element-ui', 'FORM_ITEM')).toBe('el-form-item');
    expect(utils.transformUIelName('iview', 'FORM')).toBe('i-form');
    expect(utils.transformUIelName('iview', 'FORM_ITEM')).toBe('form-item');
    expect(utils.transformUIelName()).toBe('div');
  });
});
