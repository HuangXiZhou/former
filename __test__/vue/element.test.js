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

      components: { Former },

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

  test('Render `Input` component', () => {

  });
});
