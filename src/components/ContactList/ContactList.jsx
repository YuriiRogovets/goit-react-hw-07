import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const filterContacts =
    filterValue.trim() !== ""
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
      : contacts;

  return (
    <ul className={css.contactListWrap}>
      {filterContacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
