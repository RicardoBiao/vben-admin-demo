import type { Ref } from 'vue';
import type { IGridOptions } from '@formily/grid';
import { Grid } from '@formily/grid';
export interface IFormGridProps extends IGridOptions {
  grid?: Grid<HTMLElement>;
  prefixCls?: string;
  className?: string;
}
export declare const createFormGrid: (props: IFormGridProps) => Grid<HTMLElement>;
export declare const useFormGrid: () => Ref<Grid<HTMLElement>>;
/**
 * @deprecated
 */
export declare const useGridColumn: (gridSpan?: number) => number;
export declare const FormGrid: any;
export default FormGrid;
