import * as React from "react";


export class Sidebar extends React.Component<any>{

    componentDidMount() {
        let sidebar = document.getElementById("sidebar");
        setTimeout(() => {
            if(!sidebar) return;

            sidebar.classList.toggle("show");
        }, 200);
    }

    render() {
        return <div id="sidebar" className="sidebar"></div>;
    }
}