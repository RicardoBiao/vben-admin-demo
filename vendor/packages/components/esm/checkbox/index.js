import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { Checkbox as AntdCheckbox } from 'ant-design-vue';
import { PreviewText } from '../preview-text';
import { composeExport } from '../__builtins__/shared';
var Group = AntdCheckbox.Group;
var CheckboxGroup = connect(
  Group,
  mapProps({
    dataSource: 'options',
  }),
  mapReadPretty(PreviewText.Select, {
    mode: 'tags',
  }),
);
var _CheckBox = connect(
  AntdCheckbox,
  mapProps({
    value: 'checked',
    onInput: 'onChange',
  }),
);
export var Checkbox = composeExport(_CheckBox, {
  Group: CheckboxGroup,
});
export default Checkbox;
//# sourceMappingURL=index.js.map
