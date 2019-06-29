import React from 'react'
import $ from 'jquery'
import moment from 'moment'
import ReactLoading from 'react-loading'
import utils from '../utils/utils'

export default React.createClass({
    getInitialState() {
        return {
            account: {},
            trades: [],
            positions: [],
            loading: false
        }
    },
    componentWillMount() {
        this.updateAccountInfo();
    },
    updateAccountInfo() {
        var url = "/api/currency/account";
        this.setState({loading: true});

        $.getJSON(url, (res) => {
            this.setState({account: res.account, positions: res.positions, trades: res.trades, loading: false});
        });
    },
    selectTrade(trade) {
        this.props.onSelect({
            startDate: moment().subtract(7,'d').format('YYYY-MM-DD'),
            endDate: moment().add(1, 'd').format("YYYY-MM-DD"),
            instrument: trade.instrument,
            scale: 'M15',
            trade: {
                time: trade.time,
                value: trade.price,
                stopLoss: trade.stopLoss,
                takeProfit: trade.takeProfit
            }
        });
    },
    render() {
        return <span>
            { this.state.loading && <ReactLoading type="bars" color="#444" className="loader" delay={0} width={34} height={34} /> }

            <h3 className="header" data-toggle="collapse" data-target="#AccountInfo">Account Info</h3>
            <div className="collapse in section" id="AccountInfo">
                <label>Balance: <strong>{utils.formatMoney(this.state.account.balance, 0)}</strong></label>
            </div>

            <h3 className="header" data-toggle="collapse" data-target="#openPositions">Open Positions</h3>
            <div className="collapse in section" id="openPositions">
                {
                    this.state.positions.map((position, i) => {
                        return <div key={i} className="item">
                            <div>{position.instrument}</div>
                            <div>{position.side}</div>
                            <div>{utils.formatNumber(position.units, 0)}</div>
                            <div>{utils.formatNumber(position.avgPrice, 5)}</div>
                        </div>
                    })
                }
            </div>

            <h3 className="header" data-toggle="collapse" data-target="#openTrades">Open Trades</h3>
            <div className="collapse in section" id="openTrades">
                {
                    this.state.trades.map((trade) => {
                        return <div key={trade.id} onClick={this.selectTrade.bind(this, trade)} className="item">
                            <div>
                                <span>{trade.instrument}</span>
                                <span>{trade.side}</span>
                                <span>{utils.formatNumber(trade.units, 0)}</span>
                            </div>
                            <div>
                                <span>{moment(trade.time).format("YYYY-MM-DD HH:mm")}</span>
                            </div>
                            <div>
                                <span>{utils.formatNumber(trade.price, 4)}</span>
                                <span>{utils.formatNumber(trade.takeProfit, 4)}</span>
                                <span>{utils.formatNumber(trade.stopLoss, 4)}</span>
                                <span>{utils.formatNumber(trade.trailingStop, 4)}</span>
                            </div>
                            {/*<span>{trade.trailingAmount}</span>*/}
                        </div>
                    })
                }
            </div>
        </span>
    }
})