import ListComponent from "../component/List";
import FormContainer from "./form/Form";

export default function FirstList() {
  const datasList = ["data 1", "data 2", "data 3"];
  return (
    <>
      <ListComponent datasList={datasList} />
      <FormContainer />
    </>
  );
}
