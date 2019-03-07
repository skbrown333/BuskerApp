import * as React from "react";
import { connect } from "react-redux";
import { SearchInput } from "../Inputs/SearchInput";
import { updateFilter, updateCenter } from "../../store/actions";

export class Sidebar extends React.Component<any> {
  readonly state: any;

  constructor(props: any) {
    super(props);

    this.state = {
      filter: ""
    };

    this.getEvents = this.getEvents.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let sidebar = document.getElementById("sidebar");
    setTimeout(() => {
      if (!sidebar) return;

      sidebar.classList.toggle("show");
    }, 200);
  }

  handleChange(event: any) {
    let filter = event.target.value;
    this.setState({ filter: filter });
    this.props.updateFilter(filter);
  }

  getEvents() {
    let eventRows = [];
    let events = this.props.events;
    for (var i = 0; i < events.length; i++) {
      let event = events[i];
      if (!event.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
        continue;
      }

      eventRows.push(
        <div
          className="event"
          key={event._id}
          onClick={() => {
            this.props.updateCenter({ lat: event.lat, lng: event.lng });
          }}
        >
          <img className="img" src={event.img} alt="" />
          <div className="name">{event.name}</div>
        </div>
      );
    }

    return eventRows;
  }

  render() {
    return (
      <div id="sidebar" className="sidebar">
        <SearchInput placeHolder={"Search"} onChange={this.handleChange} />
        {this.getEvents()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateFilter: (filter: string) => dispatch(updateFilter(filter)),
  updateCenter: (center: any) => dispatch(updateCenter(center))
});

export const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
