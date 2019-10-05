import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="form-group">
                <input className="form-control" placeholder="Type Here.......Search Whatever you want" value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />

            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term })
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;