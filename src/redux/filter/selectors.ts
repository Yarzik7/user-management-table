import { RootState } from '../store';
import { IFilterState } from '../../interfaces/filter.interface';

const selectFilterValues = (state: RootState): IFilterState => state.filter;

export { selectFilterValues };
