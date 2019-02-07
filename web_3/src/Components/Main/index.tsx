import * as React from "react";

import { Header } from "../Header";
import { Map } from "../Map";

export class Main extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}
