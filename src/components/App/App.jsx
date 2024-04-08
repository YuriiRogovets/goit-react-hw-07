import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
// import {
//   selectContacts,
//   selectError,
//   selectLoading,
// } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
// import Error from "../Error/Error";
// import Loader from "../Loader/Loader";

function App() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const error = useSelector(selectError);
  // const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* {contacts.length === 0 && alert("Create your first contact😉!")}
      {error && <Error />}
      {loading && <Loader />} */}
      <ContactList />
    </div>
  );
}

export default App;
