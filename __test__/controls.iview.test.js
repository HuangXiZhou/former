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
        ui: 'iview',
        options: {},
        schema: schema['iview'],
        model: model['iview']
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

  it('Render `Input` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'input');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Textarea` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'textarea');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Select` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'select');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `InputNumber` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'inputNumber');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Radio` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'radio');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Checkbox` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'checkbox');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Switch` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'switch');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  // Will generate uniq value in aria-describedby
  // it('Render `Slider` component', () => {
  //   const _schema = schema['iview'].filter((v) => v.name === 'slider');
  //   formerInstance.setData({ schema: _schema });
  //   const html = formerInstance.html();
  //   expect(html).toMatchSnapshot();
  // });

  // it('Render `DatePicker` component', () => {
  //   const _schema = schema['iview'].filter((v) => v.name === 'datePicker');
  //   formerInstance.setData({ schema: _schema });
  //   localVue.nextTick(() => {
  //     const html = formerInstance.html();
  //     expect(html).toMatchSnapshot();
  //   });
  // });

  // Will generate uniq value in focused-date
  // it('Render `TimePicker` component', () => {
  //   const _schema = schema['iview'].filter((v) => v.name === 'timePicker');
  //   formerInstance.setData({ schema: _schema });
  //   localVue.nextTick(() => {
  //     const html = formerInstance.html();
  //     expect(html).toMatchSnapshot();
  //   });
  // });

  it('Render `Tree` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'tree');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Rate` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'rate');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Cascader` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'cascader');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Upload` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'upload');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });

  it('Render `Custom` component', () => {
    const _schema = schema['iview'].filter((v) => v.name === 'custom');
    formerInstance.setData({ schema: _schema });
    localVue.nextTick(() => {
      const html = formerInstance.html();
      expect(html).toMatchSnapshot();
    });
  });
});
