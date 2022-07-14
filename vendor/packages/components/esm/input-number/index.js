import { connect, mapReadPretty } from '@formily/vue';
import { InputNumber as AntdInputNumber } from 'ant-design-vue';
import { PreviewText } from '../preview-text';
export var InputNumber = connect(AntdInputNumber, mapReadPretty(PreviewText.Input));
export default InputNumber;
//# sourceMappingURL=index.js.map
