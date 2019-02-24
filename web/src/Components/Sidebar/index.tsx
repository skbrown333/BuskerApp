import * as React from "react";
import { connect } from "react-redux";
import { SearchInput } from "../Inputs/SearchInput";
import { updateFilter, updateCenter } from "../../store/actions";

export class Sidebar extends React.Component<any>{
    readonly state: any;

    constructor(props: any) {
        super(props);

        this.state = {
            accounts: [],
            filter: ""
        }

        this.getPriests = this.getPriests.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let sidebar = document.getElementById("sidebar");
        setTimeout(() => {
            if(!sidebar) return;

            sidebar.classList.toggle("show");
        }, 200);
    }

    handleChange(event: any) {
        let filter = event.target.value;
        this.setState({ filter: filter });
        this.props.updateFilter(filter);
    }

    getPriests() {
        let accountRows = [];
        let accounts = this.props.accounts;
        for(var i = 0; i < accounts.length; i++) {
            let account = accounts[i];
            if(!account.name.toLowerCase().includes(this.state.filter)) {
                continue;
            }

            accountRows.push(
                <div 
                    className="priest" 
                    key={account._id} 
                    onClick={() => {
                        this.props.updateCenter({lat: account.lat, lng: account.lng})
                    }}>
                    <img className="img" src={account.img} alt="" />
                    <div className="name">{account.name}</div>
                </div>
            )
        }

        return accountRows;

    }

    render() {
        return (
            <div id="sidebar" className="sidebar">
                <SearchInput placeHolder={"Search"} onChange={this.handleChange} />
                {this.getPriests()}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      accounts: state.accounts,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    updateFilter: (filter: string) => dispatch(updateFilter(filter)),
    updateCenter: (center: any) => dispatch(updateCenter(center))
});
  
  export const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Sidebar);


  export default SidebarContainer;