import { createLocalVue, mount, config } from '@vue/test-utils';
import ElementUI from 'element-ui';
import Former from '../src/vue/index';
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
        ui: 'element-ui',
        options: {},
        schema,
        model
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
    }, { localVue });
  });

  test('Render `Input` component', () => {
    const _schema = schema.filter((v) => v.name === 'input');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Textarea` component', () => {
    const _schema = schema.filter((v) => v.name === 'textarea');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Select` component', () => {
    const _schema = schema.filter((v) => v.name === 'select');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `InputNumber` component', () => {
    const _schema = schema.filter((v) => v.name === 'inputNumber');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Radio` component', () => {
    const _schema = schema.filter((v) => v.name === 'radio');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Checkbox` component', () => {
    const _schema = schema.filter((v) => v.name === 'checkbox');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Switch` component', () => {
    const _schema = schema.filter((v) => v.name === 'switch');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  // // Will generate uniq value in aria-describedby
  // // test('Render `Slider` component', () => {
  // //   const _schema = schema.filter((v) => v.name === 'slider');
  // //   formerInstance.setData({ schema: _schema });
  // //   const html = formerInstance.html();
  // //   expect(html).toMatchSnapshot();
  // // });

  test('Render `DatePicker` component', () => {
    const _schema = schema.filter((v) => v.name === 'datePicker');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `TimeSelect` component', () => {
    const _schema = schema.filter((v) => v.name === 'timeSelect');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `TimePicker` component', () => {
    const _schema = schema.filter((v) => v.name === 'timePicker');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Tree` component', () => {
    const _schema = schema.filter((v) => v.name === 'tree');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Rate` component', () => {
    const _schema = schema.filter((v) => v.name === 'rate');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Cascader` component', () => {
    const _schema = schema.filter((v) => v.name === 'cascader');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Upload` component', () => {
    const _schema = schema.filter((v) => v.name === 'upload');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });

  test('Render `Custom` component', () => {
    const _schema = schema.filter((v) => v.name === 'custom');
    formerInstance.setData({ schema: _schema });
    const html = formerInstance.html();
    expect(html).toMatchSnapshot();
  });
});
