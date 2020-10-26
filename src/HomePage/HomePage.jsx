import React from 'react';
import { userService, authenticationService } from '@/_services';
import Navibar from './Navibar';
import Content from './Content';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
        };
    }

    render() {
        return (
            <div>
                <Navibar />
                <Content currentUser={this.state.currentUser} />
            </div>
        );
    }
}

export { HomePage };