import React from 'react'

export default function () {
  return (
    <div id="content" className="content">

      <ol className="breadcrumb pull-right">
        <li><a href="javascript:;">Home</a></li>
        <li><a href="javascript:;">UI Elements</a></li>
        <li className="active">General</li>
      </ol>

      <h1 className="page-header">General UI Elements <small>header small text goes here...</small></h1>

      <div className="row">

        <div className="col-md-6 ui-sortable">

          <div className="panel panel-inverse">
            <div className="panel-heading">
              <div className="panel-heading-btn">
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-repeat"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
              </div>
              <h4 className="panel-title">Alerts</h4>
            </div>
            <div className="panel-body">
              <div className="alert alert-success fade in m-b-15">
                <strong>Success!</strong>
                Vivamus vestibulum posuere est eu tincidunt.
                <span className="close" data-dismiss="alert">×</span>
              </div>
              <div className="alert alert-info fade in m-b-15">
                <strong>Info!</strong>
                Morbi sed nibh ac tortor laoreet blandit sed eu ligula.
                <span className="close" data-dismiss="alert">×</span>
              </div>
              <div className="alert alert-warning fade in m-b-15">
                <strong>Warning!</strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span className="close" data-dismiss="alert">×</span>
              </div>
              <div className="alert alert-danger fade in m-b-15">
                <strong>Error!</strong>
                Morbi vitae arcu in neque luctus elementum.
                <span className="close" data-dismiss="alert">×</span>
              </div>
            </div>
          </div>

          <div className="panel panel-inverse">
            <div className="panel-heading">
              <div className="panel-heading-btn">
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-repeat"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
              </div>
              <h4 className="panel-title">Notes</h4>
            </div>
            <div className="panel-body">
              <div className="note note-success">
                <h4>Some header text here!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas id gravida libero. Etiam semper id sem a ultricies. Donec id consequat magna.
                  Suspendisse tincidunt blandit metus, eu pretium nibh tincidunt eget.
                </p>
              </div>
              <div className="note note-info">
                <h4>Some header text here!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas id gravida libero. Etiam semper id sem a ultricies. Donec id consequat magna.
                  Suspendisse tincidunt blandit metus, eu pretium nibh tincidunt eget.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="col-md-6 ui-sortable">

          <div className="panel panel-inverse">
            <div className="panel-heading">
              <div className="panel-heading-btn">
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-repeat"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
              </div>
              <h4 className="panel-title">Labels &amp; Badges</h4>
            </div>
            <div className="panel-body">
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>Class</th>
                  <th>Labels</th>
                  <th>Badges</th>
                  <th>Square Badges</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Default</td>
                  <td><span className="label label-default">Default</span></td>
                  <td><span className="badge badge-default">6</span></td>
                  <td><span className="badge badge-default badge-square">6</span></td>
                </tr>
                <tr>
                  <td>Danger</td>
                  <td><span className="label label-danger">Danger</span></td>
                  <td><span className="badge badge-danger">4</span></td>
                  <td><span className="badge badge-danger badge-square">4</span></td>
                </tr>
                <tr>
                  <td>Warning</td>
                  <td><span className="label label-warning">Warning</span></td>
                  <td><span className="badge badge-warning">7</span></td>
                  <td><span className="badge badge-warning badge-square">7</span></td>
                </tr>
                <tr>
                  <td>Success</td>
                  <td><span className="label label-success">Success</span></td>
                  <td><span className="badge badge-success">8</span></td>
                  <td><span className="badge badge-success badge-square">8</span></td>
                </tr>
                <tr>
                  <td>Info</td>
                  <td><span className="label label-info">Info</span></td>
                  <td><span className="badge badge-info">2</span></td>
                  <td><span className="badge badge-info badge-square">2</span></td>
                </tr>
                <tr>
                  <td>Primary</td>
                  <td><span className="label label-primary">Primary</span></td>
                  <td><span className="badge badge-primary">5</span></td>
                  <td><span className="badge badge-primary badge-square">5</span></td>
                </tr>
                <tr>
                  <td>Inverse</td>
                  <td><span className="label label-inverse">Inverse</span></td>
                  <td><span className="badge badge-inverse">12</span></td>
                  <td><span className="badge badge-inverse badge-square">12</span></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel panel-inverse">
            <div className="panel-heading">
              <div className="panel-heading-btn">
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-repeat"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
              </div>
              <h4 className="panel-title">Pagination &amp; Pager</h4>
            </div>
            <div className="panel-body">
              <h5 className="m-t-0 m-b-15">Pagination</h5>
              <div>
                <ul className="pagination pagination-lg m-t-0 m-b-10">
                  <li className="disabled"><a href="javascript:;">«</a></li>
                  <li className="active"><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">5</a></li>
                  <li><a href="javascript:;">»</a></li>
                </ul>
              </div>
              <div>
                <ul className="pagination m-t-0 m-b-10">
                  <li className="disabled"><a href="javascript:;">«</a></li>
                  <li className="active"><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">5</a></li>
                  <li><a href="javascript:;">»</a></li>
                </ul>
              </div>
              <div>
                <ul className="pagination pagination-sm m-t-0 m-b-10">
                  <li className="disabled"><a href="javascript:;">«</a></li>
                  <li className="active"><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">5</a></li>
                  <li><a href="javascript:;">»</a></li>
                </ul>
              </div>
              <h5>Pager (Default &amp; Aligned links)</h5>
              <ul className="pager">
                <li><a href="javascript:;">Previous</a></li>
                <li><a href="javascript:;">Next</a></li>
              </ul>
              <ul className="pager">
                <li className="previous disabled"><a href="javascript:;">← Older</a></li>
                <li className="next"><a href="javascript:;">Newer →</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
