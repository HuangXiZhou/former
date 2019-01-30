import { createLocalVue, mount, config } from '@vue/test-utils';
import ElementUI from 'element-ui';
import Former from '../../src/vue/index';
import formerConfig from '../../src/config';
import schema from '../__mocks__/schema';
import model from '../__mocks__/model';

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
        model
      }),

      components: {
        Former
      },

      render(h) {
        return h('Former', {
          ref: formerConfig.namespace,
          props: {
            ui: 'element-ui',
            model: this.model,
            options: this.options,
            schema: this.schema
          }
        });
      }
    }, { localVue });
  });

  test('Init former', () => {
    expect(formerInstance.vm).toBeInstanceOf(Object);
  });

  test('Set global form status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setGlobalStatus('PREVIEW');
    Object.values(formerRef.statusCenter).forEach((item) => expect(item).toBe('PREVIEW'));
    formerRef.setGlobalStatus();
    Object.values(formerRef.statusCenter).forEach((item) => expect(item).toBe('EDIT'));
  });

  test('Get global form status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setGlobalStatus('EDIT');
    Object.values(formerRef.getGlobalStatus()).forEach((item) => expect(item).toBe('EDIT'));
    formerRef.setGlobalStatus('DISABLED');
    Object.values(formerRef.getGlobalStatus()).forEach((item) => expect(item).toBe('DISABLED'));
  });

  test('Set single form control status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setStatus('input', 'EDIT');
    expect(formerRef.statusCenter.input).toBe('EDIT');
  });

  test('Get single form control status', () => {
    const formerRef = formerInstance.vm.$refs.former;
    formerRef.setStatus('input', 'EDIT');
    expect(formerRef.getStatus('input')).toBe('EDIT');
  });

  test('Validate global form', () => {
    const formerRef = formerInstance.vm.$refs.former;
    return formerRef.validate((res) => expect(res).toBeFalsy());
  });

  test('Validate single field', () => {
    const formerRef = formerInstance.vm.$refs.former;
    return formerRef.validateField('input', (res) => expect(res).toBe('input is required'));
  });

  test('Reset form fields', () => {
    const formerRef = formerInstance.vm.$refs.former;
    expect(formerRef.resetFields).toBeDefined();
  });

  test('Clear form validate', () => {
    const formerRef = formerInstance.vm.$refs.former;
    expect(formerRef.clearValidate).toBeDefined();
  });

  test('Render surrounds', () => {
    const top = formerInstance.findAll('.wrapper .top').wrappers.map((v) => v.text())[0];
    const prefix = formerInstance.findAll('.wrapper .prefix').wrappers.map((v) => v.text())[0];
    const suffix = formerInstance.findAll('.wrapper .suffix').wrappers.map((v) => v.text())[0];
    const bottom = formerInstance.findAll('.wrapper .bottom').wrappers.map((v) => v.text())[0];
    expect(top).toBe('top');
    expect(prefix).toBe('prefix');
    expect(suffix).toBe('suffix');
    expect(bottom).toBe('bottom');
  });

  test('Render surrounds by functions', () => {
    const top = formerInstance.findAll('.wrapper .top div').wrappers.map((v) => v.text())[0];
    const prefix = formerInstance.findAll('.wrapper .prefix div').wrappers.map((v) => v.text())[0];
    const suffix = formerInstance.findAll('.wrapper .suffix div').wrappers.map((v) => v.text())[0];
    const bottom = formerInstance.findAll('.wrapper .bottom div').wrappers.map((v) => v.text())[0];
    expect(top).toBe('top');
    expect(prefix).toBe('prefix');
    expect(suffix).toBe('suffix');
    expect(bottom).toBe('bottom');
  });

  test('When render', () => {
    const inputArr = formerInstance.findAll('.wrapper input[aria-label="input"]').wrappers.map((v) => v.text());
    const textareaArr = formerInstance.findAll('.wrapper input[aria-label="textarea"]').wrappers.map((v) => v.text());
    const noneArr = formerInstance.findAll('.wrapper input[aria-label="none"]').wrappers.map((v) => v.text());
    expect(inputArr).toHaveLength(1);
    expect(textareaArr).toHaveLength(1);
    expect(noneArr).toHaveLength(0);
  });
});
