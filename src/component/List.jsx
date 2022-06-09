import PropTypes from "prop-types";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";

export default function List({ datasList }) {
  return (
    <>
      <ul>
        {datasList.map((li, id) => (
          <ListItemText key={id}>
            <ListItemIcon>
              <InboxIcon /> {li}
            </ListItemIcon>
          </ListItemText>
        ))}
      </ul>
    </>
  );
}

List.propTypes = {
  datasList: PropTypes.array.isRequired
};
