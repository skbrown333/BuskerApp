import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import SearchBar from "../../Components/SearchBar/search-bar.component";

class EventDialog extends Component {
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
