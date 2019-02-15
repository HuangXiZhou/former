import omit from 'object.omit';
import { cloneDeep, formatPreviewValue, deepSearchCascader } from '../../utils.js';

/**
 * Create a form control
 *
 * @param {Function} h createElement function alias
 * @param {Object} attrs form control's attributes
 * @param {String} type control's type
 */
export function createFormControl (h, attrs) {
  const { props, status, type, htmlAttr, merge } = attrs;
  attrs.class = [ 'control' ].concat(attrs.class);
  attrs.attrs = htmlAttr;
  // Remove type & htmlAttr field
  attrs = omit(attrs, [ 'type', 'htmlAttr' ]);

  // Merge props
  attrs.props = { ...attrs.props, ...merge };

  // Input
  if (type === 'input') {
    if (status === 'PREVIEW') {
      return formatPreviewValue(h, props.value);
    }
    return h('el-input', { ...attrs });
  }

  // Textarea
  if (type === 'textarea') {
    if (status === 'PREVIEW') {
      return formatPreviewValue(h, props.value);
    }
    return h('el-input', { ...attrs });
  }

  // Select
  if (type === 'select') {
    if (status === 'PREVIEW') {
      const props = cloneDeep(attrs.props);
      const value = props.options
        .filter((option) => option.value === props.value)
        .pop();
      return formatPreviewValue(h, value.label);
    }
    return h('el-select', { ...attrs }, props.options && props.options.map((option) => {
      const _attrs = {
        on: { ...(option.on || {}) },
        props: {
          value: option.id || option.value,
          label: option.name || option.label || '',
          ...omit(option, [ 'id', 'value', 'name', 'label', 'on' ])
        }
      };
      return h('el-option', { ..._attrs }, option.name || option.label || '');
    }));
  }

  // InputNumber
  if (type === 'inputNumber') {
    if (status === 'PREVIEW') {
      return h('p', props.value);
    }
    return h('el-input-number', { ...attrs });
  }

  // Radio
  if (type === 'radio') {
    if (status === 'PREVIEW') {
      return h('p', props.value);
    }
    return h('el-radio-group', { ...attrs }, props.options && props.options.map((option) => {
      const _attrs = {
        on: { ...(option.on || {}) },
        props: {
          label: option.id || option.value,
          ...omit(option, [ 'id', 'value', 'name', 'label' ])
        }
      };
      return h('el-radio', { ..._attrs }, option.name || option.label || '');
    }));
  }

  // Checkbox
  if (type === 'checkbox') {
    if (status === 'PREVIEW') {
      return h('p', props.value);
    }
    return h('el-checkbox-group', { ...attrs }, props.options && props.options.map((option) => {
      const _attrs = {
        on: { ...(option.on || {}) },
        props: {
          value: option.id || option.value,
          label: option.name || option.label || '',
          ...omit(option, [ 'id', 'value', 'name', 'label' ])
        }
      };
      return h('el-checkbox', { ..._attrs }, option.name || option.label || '');
    }));
  }

  // Switch
  if (type === 'switch') {
    if (status === 'PREVIEW') {
      return h('p', props.value);
    }
    return h('el-switch', { ...attrs });
  }

  // Slider
  if (type === 'slider') {
    if (status === 'PREVIEW') {
      attrs.props.disabled = true;
    }
    return h('el-slider', { ...attrs });
  }

  // DatePicker
  if (type === 'datePicker') {
    if (status === 'PREVIEW') {
      attrs.props.disabled = true;
    }
    return h('el-date-picker', { ...attrs });
  }

  // TimeSelect
  if (type === 'timeSelect') {
    if (status === 'PREVIEW') {
      attrs.props.disabled = true;
    }
    return h('el-time-select', { ...attrs });
  }

  // TimePicker
  if (type === 'timePicker') {
    if (status === 'PREVIEW') {
      attrs.props.disabled = true;
    }
    return h('el-time-picker', { ...attrs });
  }

  // Tree
  if (type === 'tree') {
    if (status === 'PREVIEW') {
      attrs.props.disabled = true;
    }
    return h('el-tree', { ...attrs });
  }

  // Rate
  if (type === 'rate') {
    if (status === 'PREVIEW') {
      attrs.props.disabled = true;
    }
    return h('el-rate', { ...attrs, style: { lineHeight: 2.4 } }); // fix position
  }

  // Cascader
  if (type === 'cascader') {
    if (status === 'PREVIEW') {
      attrs.props.disabled = true;
      const value = deepSearchCascader(attrs.props.value, attrs.props.options).reverse().join('/');
      return formatPreviewValue(h, value);
    }
    return h('el-cascader', { ...attrs });
  }

  // Upload
  if (type === 'upload') {
    if (status === 'PREVIEW') {
      attrs.props.disabled = true;
    }
    return h('el-upload', { ...attrs }, props.slots && Object.keys(props.slots).map(
      (slot) => h('div', [ props.slots[slot](h) ])
    ));
  }

  // Custom
  if (type === 'custom') {
    return h('div', { ...attrs }, [ props.render(h) ]);
  }
}
