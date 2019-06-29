import React from 'react'
import moment from 'moment'
import {instruments, scales} from '../../helpers/oanda'

export default React.createClass({
    getInitialState() {
        return {
            instrument: "USD_CAD",
            startDate: "2017-01-01",
            endDate: moment().format('YYYY-MM-DD'),
            scale: "D"
        };
    },
    componentDidMount() {
        this.loadData();
    },
    setFilters(params) {
        this.setState({
            instrument: params.instrument || this.state.instrument,
            startDate: params.startDate || this.state.startDate,
            endDate: params.endDate || this.state.endDate,
            scale: params.scale || this.state.scale,
        });
    },
    instrumentChange(event) {
        this.setState({instrument: event.target.value});
    },
    startDateChange(event) {
        this.setState({startDate: event.target.value});
    },
    endDateChange(event) {
        this.setState({endDate: event.target.value});
    },
    scaleChange(event) {
        this.setState({scale: event.target.value});
    },
    loadData(e) {
        if(e && e.preventDefault) e.preventDefault();

        var instrument = this.refs.instrument.value,
            startDate = moment(this.refs.startDate.value, "YYYY-MM-DD"),
            endDate = moment(this.refs.endDate.value, "YYYY-MM-DD").add(1, 'day'),
            scale = this.refs.scale.value;

        var length = endDate.diff(startDate, 'seconds') * 1000 / scales[scale];

        if(length <= 5000)
            this.props.onLoadData({
                instrument,
                startDate: startDate.format("YYYY-MM-DD"),
                endDate: endDate.format("YYYY-MM-DD"),
                scale
            });
        else
            window.alerts.show('Request is too big.', {time: 5000, type: 'info'})
    },
    render() {
        return <form ref="historyForm" className="form-inline" onSubmit={this.loadData}>
            <div className="form-group">
                <label htmlFor="instrument">Instrument</label>
                <select ref="instrument" className="form-control" onChange={this.instrumentChange} value={this.state.instrument}>
                    {
                        (() => {
                            var options = [];
                            for(var key in instruments) {
                                options.push(
                                    <option key={instruments[key].instrument} value={instruments[key].instrument}>
                                        {instruments[key].displayName}</option>
                                );
                            }
                            return options;
                        })()
                    }
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="startDate">Start</label>
                <input ref="startDate" type="date" className="form-control" onChange={this.startDateChange}
                       value={this.state.startDate} />
            </div>
            <div className="form-group">
                <label htmlFor="endDate">End</label>
                <input ref="endDate" type="date" className="form-control" onChange={this.endDateChange}
                       value={this.state.endDate} />
            </div>
            <div className="form-group">
                <select ref="scale" className="form-control" onChange={this.scaleChange} value={this.state.scale}>
                    <option value="S5">5 seconds</option>
                    <option value="S10">10 seconds</option>
                    <option value="S15">15 seconds</option>
                    <option value="S30">30 seconds</option>
                    <option value="M1">1 minute</option>
                    <option value="M2">2 minutes</option>
                    <option value="M3">3 minutes</option>
                    <option value="M4">4 minutes</option>
                    <option value="M5">5 minutes</option>
                    <option value="M10">10 minutes</option>
                    <option value="M15">15 minutes</option>
                    <option value="M30">30 minutes</option>
                    <option value="H1">1 hour</option>
                    <option value="H2">2 hours</option>
                    <option value="H3">3 hours</option>
                    <option value="H4">4 hours</option>
                    <option value="H6">6 hours</option>
                    <option value="H8">8 hours</option>
                    <option value="H12">12 hours</option>
                    <option value="D">1 Day</option>
                    <option value="W">1 Week</option>
                </select>
            </div>
            <button type="submit" className="btn btn-default">Get Data</button>
        </form>;
    }
})