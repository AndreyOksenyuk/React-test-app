import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {authMeThankCreator, logoutThankCreator, setMyAvatar} from '../../Redux/auth-reducer'
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';


class HeaderContainer extends React.PureComponent {

    componentDidMount() {
        this.props.authMe()
    }

    componentDidUpdate() {
        if (this.props.userId) {
            if (this.props.userId === this.props.myId) {
                this.props.setMyAvatar(this.props.myPhoto.small)
            }

        }
    }

    render() {
        return (
            <Header {...this.props.data}
                    logout={this.props.logoutThankCreator}
                    isAuth={this.props.isAuth}
                    login={this.props.login}
                    userId={this.props.userId}
                    myId={this.props.myId}
                    myAvatar={this.props.myAvatar}
            />
        )

    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        myId: state.auth.id,
        myAvatar: state.auth.myAvatar,
        myPhoto: state.profilePage.User.photos,
        userId: state.profilePage.User.userId,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        authMe: authMeThankCreator,
        logoutThankCreator,
        setMyAvatar,
    })
)(HeaderContainer)


