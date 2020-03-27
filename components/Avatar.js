import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}

class Avatar extends React.Component {
  state = {
    photo: "https://tva1.sinaimg.cn/large/00831rSTgy1gctzvkofjej303o03o741.jpg"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext")
      .then(respone => respone.json())
      .then(respone => {
        this.setState({
          photo: respone.photo
        });

        this.props.updateName(respone.name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
