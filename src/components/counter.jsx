import React, { Component } from 'react';
import { tag } from 'postcss-selector-parser';

class Counter extends Component {
    state = {
        count: 2,
        tags: ['tag1', 'tag2', 'tag3']
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increament</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? <h1>Zero</h1> : count
    }
}

export default Counter;