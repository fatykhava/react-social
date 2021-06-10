import React from 'react';
import {addMessage, updateNewTextMessage} from "../../redux/reducer/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewTextMessage})(Dialogs);

export default DialogsContainer;
