import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  return (
    <div className={css.searchBox}>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input
        className={css.searchInput}
        type="text"
        name="searchName"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
