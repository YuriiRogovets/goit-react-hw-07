import { useId } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        ...values,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.inputField}
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Name"
        />
        <ErrorMessage className={css.errorMsg} name="name" component="span" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={css.inputField}
          type="text"
          name="number"
          id={numberFieldId}
          placeholder="555-55-55"
        />
        <ErrorMessage className={css.errorMsg} name="number" component="span" />

        <button className={css.contactFormBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

/* <label>Name</label>
        <input type="text" name="userName" />
        <label>Number</label>
        <input type="number" name="Number" /> */
