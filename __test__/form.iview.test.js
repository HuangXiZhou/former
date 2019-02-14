import { createLocalVue, mount, config } from '@vue/test-utils';
import iView from 'iview';
import Former from '../src/index';
import formerConfig from '../src/config';
import schema from './__mocks__/schema';
import model from './__mocks__/model';

config.stubs.transition = false;
const localVue = createLocalVue();
localVue.use(iView);

describe('Former/form', () => {
  let formerInstance;

  beforeEach(() => {
    formerInstance = mount({
      data: () => ({
        options: {},
        schema: schema['iview'],
        model: model['iview'],
        ui: 'iview'
      }),

      components: { Former },

      render(h) {
        return h('Former', {
          ref: formerConfig.namespace,
          props: {
            ui: this.ui,
            model: this.model,
            options: this.options,
            schema: this.schema
          }
        });
      }
    }, { localVue, sync: false });
  });

  it('Init former', () => {
    expect(formerInstance.vm).toBeInstanceOf(Object);
  });

  it('Set default global form status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setGlobalStatus();
    localVue.nextTick(() => {
      Object.values(formerRef.statusCenter).forEach((item) => expect(item).toBe('EDIT'));
    });
  });

  it('Set global form status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setGlobalStatus('PREVIEW');
    localVue.nextTick(() => {
      Object.values(formerRef.statusCenter).forEach((item) => expect(item).toBe('PREVIEW'));
    });
  });

  it('Get global form status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setGlobalStatus('DISABLED');
    localVue.nextTick(() => {
      Object.values(formerRef.getGlobalStatus()).forEach((item) => expect(item).toBe('DISABLED'));
    });
  });

  it('Set single form control status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setStatus('input', 'EDIT');
    expect(formerRef.statusCenter.input).toBe('EDIT');
  });

  it('Get single form control status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setStatus('input', 'EDIT');
    expect(formerRef.getStatus('input')).toBe('EDIT');
  });

  it('Validate global form', () => {
    const formerRef = formerInstance.vm.$refs.former;
    return formerRef.validate((res) => expect(res).toBeFalsy());
  });

  it('Validate single field', () => {
    const formerRef = formerInstance.vm.$refs.former;
    return formerRef.validateField('input', (res) => expect(res).toBe('input is required'));
  });

  it('Reset form fields', () => {
    const formerRef = formerInstance.vm.$refs.former;
    expect(formerRef.resetFields).toBeDefined();
  });

  it('Render surrounds', () => {
    const top = formerInstance.findAll('.former-top').wrappers.map((v) => v.text())[0];
    const prefix = formerInstance.findAll('.former-wrapper .former-prefix').wrappers.map((v) => v.text())[0];
    const suffix = formerInstance.findAll('.former-wrapper .former-suffix').wrappers.map((v) => v.text())[0];
    const bottom = formerInstance.findAll('.former-bottom').wrappers.map((v) => v.text())[0];
    expect(top).toBe('top');
    expect(prefix).toBe('prefix');
    expect(suffix).toBe('suffix');
    expect(bottom).toBe('bottom');
  });

  it('Render surrounds by functions', () => {
    const top = formerInstance.findAll('.former-top div').wrappers.map((v) => v.text())[0];
    const prefix = formerInstance.findAll('.former-wrapper .former-prefix div').wrappers.map((v) => v.text())[0];
    const suffix = formerInstance.findAll('.former-wrapper .former-suffix div').wrappers.map((v) => v.text())[0];
    const bottom = formerInstance.findAll('.former-bottom div').wrappers.map((v) => v.text())[0];
    expect(top).toBe('top');
    expect(prefix).toBe('prefix');
    expect(suffix).toBe('suffix');
    expect(bottom).toBe('bottom');
  });

  it('Linkage', () => {
    const linkageFoo = formerInstance.find('.likage_foo input[type="text"]');
    linkageFoo.setValue('foo');
    localVue.nextTick(() => {
      expect(formerInstance.vm.model.linkage_bar).toBe('foo');
    });
  });

  it('When render', () => {
    const inputArr = formerInstance.findAll('.former-wrapper input[name="input"]').wrappers.map((v) => v.text());
    const textareaArr = formerInstance.findAll('.former-wrapper textarea[name="textarea"]').wrappers.map((v) => v.text());
    const noneArr = formerInstance.findAll('.former-wrapper input[name="none"]').wrappers.map((v) => v.text());
    expect(inputArr).toHaveLength(1);
    expect(textareaArr).toHaveLength(1);
    expect(noneArr).toHaveLength(0);
  });

  it('Custom class mount', () => {
    const arr = formerInstance.findAll('.former-wrapper .custom-class').wrappers;
    expect(arr).toHaveLength(1);
  });

  it('Custom style mount', () => {
    const htmlArr = formerInstance.findAll('.former-wrapper .custom-class').wrappers.map((v) => v.html());
    htmlArr.forEach((v) => expect(v).toContain('style="width: 350px;"'));
  });

  it('Form model reactive', () => {
    formerInstance.find('.former-wrapper input[name="input"]').setValue('foo');
    expect(formerInstance.vm.model.input).toBe('foo');
  });

  it('Merge', () => {
    const _schema = [ {
      label: 'merge',
      name: 'merge',
      type: 'input',
      merge: { type: 'textarea' }
    } ];
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const textareaArr = formerInstance.findAll('.former-wrapper textarea[name="textarea"]').wrappers.map((v) => v.text());
      expect(textareaArr).toHaveLength(1);
    });
  });
});
