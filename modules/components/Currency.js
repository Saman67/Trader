import React from 'react'
import $ from 'jquery'
import ReactLoading from 'react-loading'
import HighCharts from '../../public/charts/highstock'
import CurrencyFilter from './CurrencyFilter'
import IndicatorsFilter from './IndicatorsFilter'
import AccountInfo from './AccountInfo'
import CurrencyTrader from './CurrencyTrader'
import moment from 'moment'

export default React.createClass({
    getInitialState() {
        return {
            data: null,
            chart: null,
            loading: false
        }
    },
    componentDidMount() {

    },
    loadData(params) {
        var url = "/api/currency/history?instrument=" + params.instrument + "&start=" + params.startDate +
            "&end=" + params.endDate + "&scale=" + params.scale;

        if(this.refs.currencyFilters && this.refs.currencyFilters.setFilters && params)
            this.refs.currencyFilters.setFilters(params);

        this.setState({loading: true});

        $.getJSON(url, (res) => {
            var chart = HighCharts.stockChart('chart', {
                rangeSelector: {
                    selected: 5,
                    inputEnabled:false
                },
                // title: {
                //     text: 'Price History'
                // },
                credits: {
                    enabled: false
                },
                chart: {
                    zoomType: 'x',
                    animation: false
                },
                xAxis: {
                    type: 'datetime',
                    tickInterval: res.tickInterval
                },
                legend: {
                    enabled: true
                },
                series: [{
                    type: 'candlestick',
                    name: res.instrument,
                    data: res.series
                }],
                plotOptions: {
                    candlestick: {
                        color: 'red',
                        upColor: 'green'
                    }
                },
                tooltip: {
                    positioner: function () {
                        return { x: 10, y: 90 };
                    },
                    shadow: false,
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.8)'
                }
            });

            if(params.trade)
                this.drawTradeLines(chart, params.trade);

            this.setState({chart: chart, data: res, loading: false});
        });
    },
    drawTradeLines(chart, trade) {
        var tt = moment().utc(trade.time).local();
        chart.xAxis[0].addPlotLine({
            color: 'green',
            dashStyle: 'dashdot',
            value: tt,
            width: 2
        });
        chart.yAxis[0].addPlotLine({
            color: 'blue',
            dashStyle: 'dashdot',
            value: trade.value,
            width: 2
        });

        if(trade.takeProfit) {
            chart.yAxis[0].addPlotLine({
                color: 'green',
                dashStyle: 'dashdot',
                value: trade.takeProfit,
                width: 2
            });
        }
        if(trade.stopLoss) {
            chart.yAxis[0].addPlotLine({
                color: 'red',
                dashStyle: 'dashdot',
                value: trade.stopLoss,
                width: 2
            });
        }
    },
    render() {
        return <div className="row">
            <div className="col-md-9">
                { this.state.loading && <ReactLoading type="bars" color="#444" className="loader" delay={0} width={34} height={34} /> }
                <div className="controls">
                    <CurrencyFilter ref="currencyFilters" onLoadData={this.loadData} />
                    {/*<IndicatorsFilter data={this.state.data} chart={this.state.chart} />*/}
                </div>
                <div id="chart" className="content"></div>
            </div>
            <div className="col-md-3 right-panel">
                <h3 className="header" data-toggle="collapse" data-target="#currencyTrader">Auto Trader</h3>
                <div className="collapse in section" id="currencyTrader">
                    <CurrencyTrader loadData={this.loadData} />
                </div>

                <AccountInfo onSelect={this.loadData} />
            </div>
        </div>
    }
})