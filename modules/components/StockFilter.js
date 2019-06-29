import React from 'react'
import moment from 'moment'
import Quadl from '../../helpers/quadl'

import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';

export default React.createClass({
    getInitialState() {
        return {
            equity: "AAPL"
        }
    },
    componentDidMount() {
        this.loadData();
    },
    loadData(e) {
        if(e && e.preventDefault) e.preventDefault();

        var equity = this.state.equity,
            startDate = this.refs.startDate.value,
            endDate = this.refs.endDate.value;

        this.props.onLoadData({equity, startDate, endDate});
    },
    render() {
        var equities = [];
        for(var key in Quadl.WIKI)
            equities.push({label: key, value: key});
        const filterOptions = createFilterOptions({ options: equities });

        return <form className="form-inline col-md-7" onSubmit={this.loadData}>
            <div className="form-group">
                <label htmlFor="equity">Instrument</label>
                <Select options={equities} filterOptions={filterOptions}
                        onChange={(v) => this.setState({ equity: v.value })}
                        value={this.state.equity} clearable={false} />
            </div>
            <div className="form-group">
                <label htmlFor="startDate">Start</label>
                <input ref="startDate" type="date" defaultValue="2017-01-01" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="endDate">End</label>
                <input ref="endDate" type="date" className="form-control" defaultValue={moment().format('YYYY-MM-DD')} />
            </div>
            <button type="submit" className="btn btn-default">Get Data</button>
        </form>;
    }
})