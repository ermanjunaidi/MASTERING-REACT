import React, { Component } from 'react';
import { tag } from 'postcss-selector-parser';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    renderTags() {
        if (this.state.tags.lenght === 0) return <p>There are no tag</p>;

        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;

    }
    render() {
        return (
            <div>
                {this.state.tags.length === 0 && 'please crate a new tag'}
                {this.renderTags()}
            </div>
        );
    }

}

export default Counter;