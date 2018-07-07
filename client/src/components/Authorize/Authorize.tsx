import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { RouteUrls } from '../../routes/routes.constant';

interface AuthorizationProps extends RouteComponentProps<any> {
    isLoggedIn: boolean;
    //   permissions: string[];
}

const mapStateToProps = (state: AppState): AuthorizationProps => {
    return {
        isLoggedIn: state.profile.isLoggedIn,
        // permissions: state.profile.permissions,
    } as AuthorizationProps;
};

const Authorize = (WrappedComponent, permission?: string) => {
    return connect(mapStateToProps)(
        class Authorization extends React.Component<AuthorizationProps, any> {
            constructor(props: AuthorizationProps, context: any) {
                super(props, context);
            }

            render(): JSX.Element {
                if (!this.props.isLoggedIn) {
                    //   const loginUrl = `${RouteUrls.Login}?callbackUrl=${
                    //     this.props.location.pathname
                    //   }`;
                    return <Redirect to={RouteUrls.Login} />;
                }
                const isAuthorized = true;
                //   !permission ||
                //   (permission &&
                //     this.props.permissions &&
                //     this.props.permissions.indexOf(permission) > -1);
                if (isAuthorized) {
                    return <WrappedComponent {...this.props} />;
                } else {
                    return <Redirect to={RouteUrls.Page403} />;
                }
            }
        },
    );
};
export default Authorize;
