import React from 'react'

export default function () {
  return (
    <div id="content" className="content">

      <ol className="breadcrumb pull-right">
        <li><a href="javascript:;">Home</a></li>
        <li><a href="javascript:;">Dashboard</a></li>
        <li className="active">Dashboard v2</li>
      </ol>

      <h1 className="page-header">Dashboard v2
        <small>header small text goes here...</small>
      </h1>

      <div className="row">
        <div className="col-md-3 col-sm-6 ui-sortable">
          <div className="widget widget-stats bg-green">
            <div className="stats-icon stats-icon-lg"><i className="fa fa-globe fa-fw"></i></div>
            <div className="stats-titl">TODAY'S VISITS</div>
            <div className="stats-number">7,842,900</div>
            <div className="stats-progress progress">
              <div className="progress-bar" style={{width: "70.1%"}}></div>
            </div>
            <div className="stats-desc">Better than last week (70.1%)</div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 ui-sortable">
          <div className="widget widget-stats bg-blue">
            <div className="stats-icon stats-icon-lg"><i className="fa fa-tags fa-fw"></i></div>
            <div className="stats-title">TODAY'S PROFIT</div>
            <div className="stats-number">180,200</div>
            <div className="stats-progress progress">
              <div className="progress-bar" style={{width: "40.5%"}}></div>
            </div>
            <div className="stats-desc">Better than last week (40.5%)</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 ui-sortable">
          <div className="widget widget-stats bg-purple">
            <div className="stats-icon stats-icon-lg"><i className="fa fa-shopping-cart fa-fw"></i></div>
            <div className="stats-title">NEW ORDERS</div>
            <div className="stats-number">38,900</div>
            <div className="stats-progress progress">
              <div className="progress-bar" style={{width: "76.3%"}}></div>
            </div>
            <div className="stats-desc">Better than last week (76.3%)</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 ui-sortable">
          <div className="widget widget-stats bg-black">
            <div className="stats-icon stats-icon-lg"><i className="fa fa-comments fa-fw"></i></div>
            <div className="stats-title">NEW COMMENTS</div>
            <div className="stats-number">3,988</div>
            <div className="stats-progress progress">
              <div className="progress-bar" style={{width: "54.9%"}}></div>
            </div>
            <div className="stats-desc">Better than last week (54.9%)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
