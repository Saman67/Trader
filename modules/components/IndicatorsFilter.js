import React from 'react'
import $ from 'jquery'

export default React.createClass({
    addIndicator(e) {
        if (e && e.preventDefault) e.preventDefault();

        var indicatorId = this.refs.indicator.value;
        var dept = this.refs.scale.value;

        if (!this.props.data || !!this.props.chart || !indicatorId) return;


        var url = "/api/indicators/?indicator=" + indicatorId + "&dept=" + dept;
        $.post(url, {data: this.props.data.series}, function (data) {
            this.props.chart.addSeries({
                name: data.name,
                data: data.points
            });
        }, 'json');
    },
    render() {
        return <form ref="indicatorForm" className="form-inline col-md-5" onSubmit={this.addIndicator}>
            <div className="form-group">
                <label htmlFor="indicator">Indicator</label>
                <select ref="indicator" className="form-control">
                    <option value="linear_aggression">Linear Aggression</option>
                    <option value="accumulation_day">Accumulation Day</option>
                    <option value="distribution_day">Distribution Day</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="indicatorDept">Dept</label>
                <input ref="scale" type="number" defaultValue="5" className="form-control" />
            </div>
            <button type="submit" className="btn btn-default">Add</button>
        </form>;
    }
})