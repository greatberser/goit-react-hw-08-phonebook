import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (
      <label>
        <p>Find Contacts by name:</p>
        <input
          value={filter}
          onChange={evt => dispatch(updateFilter(evt.target.value))}
          name="filter"
          type="text"
          placeholder="Input name"
        />
      </label>
    );
}

export default Filter;