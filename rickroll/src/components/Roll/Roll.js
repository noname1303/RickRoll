import React, { Component } from "react";
import { connect } from "react-redux";

class Roll extends Component {
  render() {
    const renderRoll = () =>
      this.props.arrRoll.map((item, idx) => (
        <div className="col-4" key={idx}>
          <img src={item.img} alt="" width="60px" />
        </div>
      ));
    return (
      <div className="row" style={{ marginTop: "30px" }}>
        {renderRoll()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrRoll: state.rollReducer.imgRoll,
  };
};

export default connect(mapStateToProps)(Roll);
