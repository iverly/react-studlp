import React, { createContext, Component } from 'react';

export const UserContext = createContext({
    name: '',
});

class UserProvider extends Component {
    state = {
        isConnected: false,
        setConnected: b => this.setState({ isConnected: b }),
        lastName: '',
        firstName: '',
        email: '',
        city: '',
        school: '',
        date: '',
        setData: (lastName, firstName, email, city, school, date) => this.setState({ lastName, firstName, email, city, school, date })
    };
  
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;