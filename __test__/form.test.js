import { createLocalVue, mount, config } from '@vue/test-utils';
import ElementUI from 'element-ui';
import Former from '../src/index';
import formerConfig from '../src/config';
import schema from './__mocks__/schema';
import model from './__mocks__/model';

config.stubs.transition = false;
const localVue = createLocalVue();
localVue.use(ElementUI);

describe('Former/form', () => {
  let formerInstance;

  beforeEach(() => {
    formerInstance = mount({
      data: () => ({
        options: {},
        schema,
        model,
        ui: 'element-ui'
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

  it('Clear form validate', () => {
    const formerRef = formerInstance.vm.$refs.former;
    expect(formerRef.clearValidate).toBeDefined();
  });

  it('Render surrounds', () => {
    const top = formerInstance.findAll('.wrapper .top').wrappers.map((v) => v.text())[0];
    const prefix = formerInstance.findAll('.wrapper .prefix').wrappers.map((v) => v.text())[0];
    const suffix = formerInstance.findAll('.wrapper .suffix').wrappers.map((v) => v.text())[0];
    const bottom = formerInstance.findAll('.wrapper .bottom').wrappers.map((v) => v.text())[0];
    expect(top).toBe('top');
    expect(prefix).toBe('prefix');
    expect(suffix).toBe('suffix');
    expect(bottom).toBe('bottom');
  });

  it('Render surrounds by functions', () => {
    const top = formerInstance.findAll('.wrapper .top div').wrappers.map((v) => v.text())[0];
    const prefix = formerInstance.findAll('.wrapper .prefix div').wrappers.map((v) => v.text())[0];
    const suffix = formerInstance.findAll('.wrapper .suffix div').wrappers.map((v) => v.text())[0];
    const bottom = formerInstance.findAll('.wrapper .bottom div').wrappers.map((v) => v.text())[0];
    expect(top).toBe('top');
    expect(prefix).toBe('prefix');
    expect(suffix).toBe('suffix');
    expect(bottom).toBe('bottom');
  });

  it('When render', () => {
    const inputArr = formerInstance.findAll('.wrapper input[aria-label="input"]').wrappers.map((v) => v.text());
    const textareaArr = formerInstance.findAll('.wrapper input[aria-label="textarea"]').wrappers.map((v) => v.text());
    const noneArr = formerInstance.findAll('.wrapper input[aria-label="none"]').wrappers.map((v) => v.text());
    expect(inputArr).toHaveLength(1);
    expect(textareaArr).toHaveLength(1);
    expect(noneArr).toHaveLength(0);
  });

  it('Custom class mount', () => {
    const arr = formerInstance.findAll('.wrapper .custom-class').wrappers;
    expect(arr).toHaveLength(1);
  });

  it('Custom style mount', () => {
    const htmlArr = formerInstance.findAll('.wrapper .custom-class').wrappers.map((v) => v.html());
    htmlArr.forEach((v) => expect(v).toContain('style="width: 350px;"'));
  });

  it('Form model reactive', () => {
    formerInstance.find('.wrapper input[aria-label="input"]').setValue('foo');
    expect(formerInstance.vm.model.input).toBe('foo');
  });
});
