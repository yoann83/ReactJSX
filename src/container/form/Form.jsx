import { useState } from "react";
import FieldComponent from "../../component/Field";
import "./form.scss";

export default function Form() {
  const [state, setState] = useState({
    lastname: "",
    firstname: "",
    newsletter: false,
    submit: "Submit"
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState(value);
  };

  const handleSubmit = () => {
    alert("send");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <FieldComponent
          type="text"
          name="lastname"
          defaultValue={state.lastname}
          onChange={handleChange}
        >
          nom
        </FieldComponent>
        <FieldComponent
          type="text"
          name="firstname"
          defaultValue={state.firstname}
          onChange={handleChange}
        >
          Prénom
        </FieldComponent>
        <div>
          <FieldComponent type="submit" value={state.submit}></FieldComponent>
        </div>
      </form>
    </div>
  );
}
