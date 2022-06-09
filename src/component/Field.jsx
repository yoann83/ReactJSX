import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function Field({
  type,
  name,
  defaultValue,
  onChange,
  children
}) {
  return (
    <div className="TextField">
      <TextField
        type={type}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        id={name}
        label={children}
        variant="outlined"
      ></TextField>
    </div>
  );
}

Field.propTypes = {
  type: PropTypes.string.isRequired
};
