import React from 'react';
import { useParams } from 'react-router-dom';
import db from '../../Database';  // Assuming your JSON is exported from your Database file

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;  // Assuming modules is the name of the exported JSON
  return (
    <div>
        <link href="../labs/a2/index.css" rel="stylesheet"/>
        <link href="../vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="../vendors/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet"/>
        <div class="input-group mb-3">
                  <div class="input-group-prepend">
                     <button class = "btn btn-secondary">Collapse All</button>
                     <button class = "btn btn-secondary">View Progress</button>
                  </div>
                  <div class="btn-group">
                     <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                       Publish All
                     </button>
                     <ul class="dropdown-menu">
                       <li><a class="dropdown-item" href="#">Publish All modules and items</a></li>
                       <li><a class="dropdown-item" href="#">Publish All modules only</a></li>
                       <li><a class="dropdown-item" href="#">Unpublish All</a></li>
                       <li><hr class="dropdown-divider"/></li>
                       <li><a class="dropdown-item" href="#">Separated link</a></li>
                     </ul>
                   </div>
                  <div class="input-group-append">
                     <button class = "btn btn-danger" >+Module</button>
                  </div>
                </div>
               <hr/>
        
        {
        modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div key={index} className="list-group">
            <button type="button" className="list-group-item list-group-item-secondary list-group-item-action">
              {module.week}
            </button>
            {module.items.map((item, itemIndex) => (
              <button 
                key={itemIndex} 
                type="button" 
                className="list-group-item list-group-item-action" 
                style={{paddingLeft: item.padding}}
              >
                {item.text}
                {item.icon && <i className="fa fa-check-circle float-end wd-fg-color-green" aria-hidden="true"></i>}
              </button>
            ))}
          </div>
        ))}
    </div>
  );
}

export default ModuleList;


