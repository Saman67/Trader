import React from 'react'
import {algorithms} from '../../helpers/algorithms'

export default React.createClass({
    runAlgorithm(e) {
        if(e && e.preventDefault) e.preventDefault();
    },
    render() {
        return <form ref="algorithmForm" className="form-inline col-md-12" onSubmit={this.runAlgorithm}>
            <div className="form-group">
                <label htmlFor="algorithm">Algorithm</label>
                <select ref="algorithm" className="form-control">
                    {
                        (() => {
                            var options = [];
                            for(var key in algorithms) {
                                options.push(
                                    <option key={algorithms[key].id} value={algorithms[key].id}>
                                        {algorithms[key].name}</option>
                                );
                            }
                            return options;
                        })()
                    }
                </select>
            </div>
            <button type="submit" className="btn btn-default">Run Trader</button>
        </form>;
    }
})