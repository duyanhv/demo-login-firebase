import React from 'react';
import { AppState } from '../../redux';
import { connect, Dispatch } from 'react-redux';
import { logout } from '../../redux/profile/action';

interface MainPageProps {
    id: string;
    username: string;
    email: string;
    fullName: string;
    dispatch: Dispatch<any>;
}

class MainPage extends React.Component<MainPageProps> {
    constructor(props: MainPageProps) {
        super(props);
    }

    signOutClick = () => {
        this.props.dispatch(
            logout()
        );
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>secret page</h1>
                <h1>User Info</h1>
                <p>Id: {this.props.id}</p>
                <p>Email: {this.props.email}</p>
                <p>Fullname: {this.props.fullName}</p>
                <button onClick={this.signOutClick}>
                    Sign Out
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    id: state.profile.id,
    email: state.profile.email,
    fullName: state.profile.fullName
});

export default connect(mapStateToProps)(MainPage);
