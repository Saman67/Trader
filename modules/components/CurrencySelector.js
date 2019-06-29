import React from 'react'
import OANDA from '../../helpers/oanda'
import without from 'lodash/without'
import uniq from 'lodash/uniq'
import moment from 'moment'
import ClickOutside from 'react-click-outside'

export default ClickOutside(React.createClass({
    getInitialState: function() {
        return {
            options: [],                                // List of filtered instruments to select
            instruments: Object.keys(OANDA.instruments) // List of all instruments
        };
    },
    handleRemove: function(value) {
        if(!this.state.options && !this.state.options.length)
        {
            var options = this.state.options;
            options.push(value);
            options = uniq(options);
            this.setState({ options });
        }

        var selected = uniq(without(this.props.instruments, value));
        this.props.saveSettings({instruments: selected});
    },
    handleSelect: function(value) {
        var selected = uniq(this.props.instruments.concat([value]));
        var options = uniq(without(this.state.options, value));
        this.setState({ options });
        this.props.saveSettings({instruments:selected});
    },
    handleClickOutside() {
        this.setState({ options: [] });
        this.refs.filterInstruments.value = "";
    },
    filterInstruments: function(event) {
        if (event.target.value === '')
            return this.setState({options: []});

        var filter = new RegExp('^' + event.target.value, 'i');

        var filteredInstruments = this.state.instruments.filter(function(instrument) {
            return filter.test(instrument);
        });

        filteredInstruments = filteredInstruments.filter((instrument) => {
            return this.props.instruments.indexOf(instrument) === -1
        });

        this.setState({ options: filteredInstruments });
    },
    loadInstrument(instrument) {
        this.props.loadData({
            instrument: instrument,
            startDate: '2017-01-01',
            endDate: moment().add(2, 'd').format("YYYY-MM-DD"),
            scale: 'D'
        });
    },
    render: function() {
        return (
            <div className="currency-list">
                <div className="selected">
                {
                    this.props.instruments.map((instrument)=>{
                        return <div key={instrument} onClick={this.loadInstrument.bind(null, instrument)} >
                            <span className="remove" onClick={this.handleRemove.bind(null, instrument)}>x</span>
                            {instrument}
                        </div>
                    })
                }
                </div>
                <input ref="filterInstruments" onChange={this.filterInstruments} placeholder="search" />
                {
                    this.state.options.length ? <div className="options">
                        {
                            this.state.options.map(function (instrument) {
                                return <div key={instrument} onClick={this.handleSelect.bind(null, instrument)}>
                                    {instrument}
                                </div>
                            }, this)
                        }
                    </div> : null
                }
            </div>
        );
    }
}));