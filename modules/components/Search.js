import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

export default React.createClass({
    componentDidMount() {
        $("#searchForm").submit(function (e) {
            if(e) e.preventDefault();
            var term = $("#searchTerm").val();
            if(!term)
                return;

            var jsonRequestUrl = "/api/stock/search?beautify=yes&term=" + encodeURI(term);

            $.getJSON(jsonRequestUrl, function foo(result) {

                var html = "<div>";

                $.each(result.datasets, function (index, ds) {

                    var linkUrl = "/api/stock/search/metadata?dataset="+ds.dataset_code+"&database=" + ds.database_code;
                    html += "<div class='ds'>" +
                        "<div><label>Dataset Code</label><span><a href='" + linkUrl + "'>" + ds.dataset_code + "</a></span></div>" +
                        "<div><label>Database Code</label><span><a href='" + linkUrl + "'>" + ds.database_code + "</a></span></div>" +
                        "<div><label>Name</label><span>" + ds.name + "</span></div>" +
                        "<div><label>Description</label><span>" + ds.description + "</span></div>" +
                        "<div><label>Refreshed At</label><span>" + ds.refreshed_at + "</span></div>" +
                        "<div><label>Newest Date</label><span>" + ds.newest_available_date + "</span></div>" +
                        "<div><label>Oldest date</label><span>" + ds.oldest_available_date + "</span></div>" +
                        "<div><label>Columns</label><span>" + ds.column_names + "</span></div>" +
                        "<div><label>Frequency</label><span>" + ds.frequency + "</span></div>" +
                        "<div><label>Type</label><span>" + ds.type + "</span></div>" +
                        "<div><label>Premium:</label><span>" + ds.premium + "</span></div>" +
                        "</div>"
                });

                $('#searchView').html(html);
            });
        });
    },
    render() {
        return <div className="row">
            <div className="col-md-12">
                <div className="controls">
                    <form id="searchForm" class="form-inline">
                        <div className="form-group">
                            <input id="searchTerm" type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
                <div id="searchView" className="content">
                </div>
            </div>
        </div>;
    }
})