import React, { Component } from "react";
import "./shop-page.styles.scss";
import SHOP_DATA from "./shopdata";
import {CollectionPreview} from '../../components/collection-preview/collection-preview.component'
export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
 
  render() {
    const {collections}=this.state
    return (
      <div className="shop-page">
         { collections.map(({id,...othercollectionprops})=>(
            <CollectionPreview key={id} {...othercollectionprops}/>
          ))
         }
      </div>
    );
  }
}
