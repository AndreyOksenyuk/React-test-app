import React from 'react';
import Setting from './Settings';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const SettingsContainer = (props) => {
   return <Setting {...props} />
}

let mapStateToProps = (state) => ({
   text: state.settingPage.text
})



export default compose(
   withAuthRedirect,
   connect(mapStateToProps, {

   }),
)(SettingsContainer)
