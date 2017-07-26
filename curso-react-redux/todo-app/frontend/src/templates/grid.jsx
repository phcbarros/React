import React, { Component } from 'react';

export default class Grid extends Component {
    toCssClasses(columns) {
        const cols = columns ? columns.split(' ') : [];
        let classes = [];

        if (cols[0]) classes.push(`col-xs-${cols[0]}`);
        if (cols[1]) classes.push(` col-sm-${cols[1]}`);
        if (cols[2]) classes.push(` col-md-${cols[2]}`);
        if (cols[3]) classes.push(` col-lg-${cols[3]}`);

        return classes.join(' ');
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.columns || 12);
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}