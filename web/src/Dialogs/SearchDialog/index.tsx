import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import SearchBar from "../../Components/SearchBar";

class EventDialog extends React.Component<any, {}> {
  render() {
    return (
      <Dialog
        onClose={this.props.onClose}
        open={this.props.open}
        aria-labelledby="simple-dialog-title"
        className="search-dialog"
        fullScreen={true}
      >
        <SearchBar
          onPlacesChanged={this.props.search}
          onClose={this.props.onClose}
        />
      </Dialog>
    );
  }
}

export default EventDialog;
