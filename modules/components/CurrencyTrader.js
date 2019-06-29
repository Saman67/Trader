import React from 'react'
import $ from 'jquery'
import moment from 'moment'
import ReactLoading from 'react-loading'
import CurrencySelector from './CurrencySelector'


export default React.createClass({
    getInitialState() {
        return {
            settings: {},
            loading: false
        }
    },
    componentWillMount() {
        this.updateTraderSettings();
    },
    updateTraderSettings() {
        var url = "/api/currency/trader/settings";
        this.setState({loading: true});

        $.getJSON(url, (res) => {
            this.setState({settings: res, loading: false});
        });
    },
    startStop() {
        var settings = this.state.settings;
        if (this.state.settings.status === 'Stopped')
            settings.status = 'Started';
        else if (this.state.settings.status === 'Started')
            settings.status = 'Stopped';

        this.setState({settings}, () => this.saveSettings());
    },
    saveSettings(settings) {
        var settings = Object.assign(this.state.settings, settings);
        this.setState(settings, () => {
            $.post("/api/currency/trader/settings", this.state.settings, (res) => {
                // If save settings is called from child component (settings is available) don't update the view
                // because child component will handle it when it is necessary
                this.updateTraderSettings();
            });
        });
    },
    changeInterval(event) {
        var settings = this.state.settings;
        settings.period = event.target.value;
        this.saveSettings(settings);
    },
    changeUnits(event) {
        var settings = this.state.settings;
        settings.unitsPerTrade = event.target.value;
        this.saveSettings(settings);
    },
    changeMaxOpenTrades(event) {
        var settings = this.state.settings;
        settings.maxOpenTrade = event.target.value;
        this.saveSettings(settings);
    },
    render() {
        return <div>
            { this.state.loading && <ReactLoading type="bars" color="#444" className="loader" delay={0} width={34} height={34} /> }
            <div>
                <label>
                    Status: <strong>{this.state.settings.status} </strong>
                    <button onClick={this.startStop}>{this.state.settings.status === 'Stopped' ? 'Start':'Stop'}</button>
                </label>
                <label>
                    Execute Trader Every
                    <input type="number" value={this.state.settings.period || ''} onChange={this.changeInterval} step="1" min="5"/>
                    minutes
                </label>
                <label>
                    Units per Trade
                    <input type="number" value={this.state.settings.unitsPerTrade || ''} onChange={this.changeUnits}
                           step="100" min="100" />
                </label>
                <label>
                    Max Open Trade
                    <input type="number" value={this.state.settings.maxOpenTrade || ''} onChange={this.changeMaxOpenTrades}
                           step="1" min="1" max="20"/>
                </label>
                <div>
                    <label>Instruments:</label>
                    <CurrencySelector instruments={this.state.settings.instruments || []} saveSettings={this.saveSettings}
                                      loadData={this.props.loadData} />
                </div>
            </div>
        </div>
    }
})