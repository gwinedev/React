import { Component } from "react";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 1,
        },
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 1,
        },
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size:'large',
          id: 1,
        },
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size:'large',
          id: 1,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    );
  }
}

export default Directory;
