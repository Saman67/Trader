import React from 'react'
import $ from 'jquery'
import HighCharts from '../../public/charts/highstock'
import StockFilter from './StockFilter'
import IndicatorsFilter from './IndicatorsFilter'

export default React.createClass({
    getInitialState() {
        return {
            data: null,
            chart: null
        }
    },
    loadData(params) {
        var url = "/api/stock/history?equity=" + params.equity + "&start=" + params.startDate + "&end=" + params.endDate;

        $.getJSON(url, (res) => {
            this.setState({data: res});
            var chart = HighCharts.stockChart('chart', {
                rangeSelector: {
                    selected: 5,
                    inputEnabled:false
                },
                title: {
                    text: 'Price History'
                },
                chart: {
                    zoomType: 'x',
                    animation: false
                },
                xAxis: {
                    type: 'datetime',
                    //tickInterval: 24 * 3600000
                },
                legend: {
                    enabled: true
                },
                //                    plotOptions: {
                //                        line: {
                //                            dataLabels: {
                //                                enabled: true
                //                            },
                //                        }
                //                    },
                series: [{
                    name: res.equity,
                    data: res.data,
                    turboThreshold: 10000
                }],
                tooltip: {
                    useHTML: true,
                    formatter: function() {
                        var p = this.points[0].point.options;
                        var tt = "<strong>Date: " + new Date(p.x).toLocaleDateString() + "</strong><br/>";

                        if(p.o)
                            tt += "Open: " + p.o + "<br/>";

                        tt += "<strong>Close: " + p.y + "</strong><br/>";

                        if(p.h)
                            tt += "High: " + p.h + "<br/>";
                        if(p.l)
                            tt += "Low: " + p.l + "<br/>";
                        if(p.v)
                            tt += "Volume: " + p.v + "<br/>";

                        return tt;
                    }
                }
            });
            this.setState({chart: chart});
        });
    },
    render() {
        return <div className="row">
            <div>
                <div className="controls">
                    <StockFilter onLoadData={this.loadData} />
                    <IndicatorsFilter />
                </div>
                <div id="chart" className="content"></div>
            </div>
        </div>
    }
})