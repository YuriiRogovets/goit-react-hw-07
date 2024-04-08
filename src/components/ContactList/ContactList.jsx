import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectError,
  selectLoading,
  selectNameFilter,
} from "../../redux/selectors";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const filterContacts =
    filterValue.trim() !== ""
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
      : contacts;

  return (
    <div>
      {error && <Error />}
      {loading && <Loader />}
      <ul className={css.contactListWrap}>
        {filterContacts > 0 &&
          filterContacts.map((item) => {
            return (
              <li key={item.id}>
                <Contact name={item.name} number={item.number} id={item.id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
