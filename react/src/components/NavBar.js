import React from 'react'

export default function () {
  return (
    <div id="header" className="header navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="index.html" className="navbar-brand">bindo dashboard v2</a>
          <button type="button" className="navbar-toggle" data-click="sidebar-toggled">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <form className="navbar-form full-width">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter keyword"/>
                <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
              </div>
            </form>
          </li>
          <li className="dropdown">
            <a href="javascript:;" data-toggle="dropdown" className="dropdown-toggle f-s-14">
              <i className="fa fa-bell-o"></i>
              <span className="label">5</span>
            </a>
            <ul className="dropdown-menu media-list pull-right animated fadeInDown">
              <li className="dropdown-header">Notifications (5)</li>
              <li className="media">
                <a href="javascript:;">
                  <div className="pull-left media-object bg-red"><i className="fa fa-bug"></i></div>
                  <div className="media-body">
                    <h6 className="media-heading">Server Error Reports</h6>

                    <div className="text-muted">3 minutes ago</div>
                  </div>
                </a>
              </li>
              <li className="media">
                <a href="javascript:;">
                  <div className="pull-left"><img src="assets/img/user-1.jpg" className="media-object" alt=""/></div>
                  <div className="media-body">
                    <h6 className="media-heading">John Smith</h6>

                    <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>

                    <div className="text-muted">25 minutes ago</div>
                  </div>
                </a>
              </li>
              <li className="media">
                <a href="javascript:;">
                  <div className="pull-left"><img src="assets/img/user-2.jpg" className="media-object" alt=""/></div>
                  <div className="media-body">
                    <h6 className="media-heading">Olivia</h6>

                    <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>

                    <div className="text-muted">35 minutes ago</div>
                  </div>
                </a>
              </li>
              <li className="media">
                <a href="javascript:;">
                  <div className="pull-left media-object bg-green"><i className="fa fa-plus"></i></div>
                  <div className="media-body">
                    <h6 className="media-heading"> New User Registered</h6>

                    <div className="text-muted">1 hour ago</div>
                  </div>
                </a>
              </li>
              <li className="media">
                <a href="javascript:;">
                  <div className="pull-left media-object bg-blue"><i className="fa fa-envelope"></i></div>
                  <div className="media-body">
                    <h6 className="media-heading"> New Email From John</h6>

                    <div className="text-muted">2 hour ago</div>
                  </div>
                </a>
              </li>
              <li className="dropdown-footer text-center">
                <a href="javascript:;">View more</a>
              </li>
            </ul>
          </li>
          <li className="dropdown navbar-user">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">
              <img src="assets/img/user-13.jpg" alt=""/>
              <span className="hidden-xs">Adam Schwartz</span> <b className="caret"></b>
            </a>
            <ul className="dropdown-menu animated fadeInLeft">
              <li className="arrow"></li>
              <li><a href="javascript:;">Edit Profile</a></li>
              <li><a href="javascript:;"><span className="badge badge-danger pull-right">2</span> Inbox</a></li>
              <li><a href="javascript:;">Calendar</a></li>
              <li><a href="javascript:;">Setting</a></li>
              <li className="divider"></li>
              <li><a href="javascript:;">Log Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
