import React, { Component } from "react";
import { connect } from "react-redux";

class MachSummary extends Component {
  state = {};
  render() {
    return (
      <div style={{ padding: "5px", boxSizing: "border-box" }}>
        <h4>Description: </h4>
        <p>
          {this.props.selectedMach
            ? this.props.selectedMach.description
            : "No machine is selected."}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMach: state.mach.selectedMach
  };
};

export default connect(mapStateToProps)(MachSummary);
