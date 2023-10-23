import React from 'react';

function CourseStatus() {
    return (
        <td width="90" valign="top" style={{paddingLeft: '3%'}}>
            <h5>Course Status</h5>
               <button type="button" class="btn btn-secondary">Unpublish</button>
               <button type="button" class="btn btn-success">Publish</button>
               <div class="list-group" width ="20%">
                  <button class="list-group-item list-group-item-secondary list-group-item-action"><a class="wd-fg-color-black text-decoration-none"href="#">Import Existing Content</a></button>
                  <button class="list-group-item list-group-item-secondary list-group-item-action"><a class="wd-fg-color-black text-decoration-none" href="#">Import From Commons</a></button>
                  <button class="list-group-item list-group-item-secondary list-group-item-action"><a class="wd-fg-color-black text-decoration-none" href="#">View Course Stream</a></button>
                  <button class="list-group-item list-group-item-secondary list-group-item-action"><a class="wd-fg-color-black text-decoration-none" href="#">View Course Stream</a></button>
                     <button class="list-group-item list-group-item-secondary list-group-item-action"><a class="wd-fg-color-black text-decoration-none" href="#">New Announcment</a></button>
                     <button class="list-group-item list-group-item-secondary list-group-item-action"><a class="wd-fg-color-black text-decoration-none" href="#">New Analytics</a></button>
                     <button class="list-group-item list-group-item-secondary list-group-item-action"><a class="wd-fg-color-black text-decoration-none" href="#">Veiw Course Notifications</a></button> 
                </div><br/>
                <header>
                  <h5>Comming Up</h5>
                  <span><a class= "wd-fg-color-red text-decoration-none" href="#">
                     View Calendar
                  </a></span>
                </header>
               <ul>
                  <li><a class= "wd-fg-color-red text-decoration-none" href="#">Lecture CS4550 12631 Web Development SEC 01 Fall 2023 [BOS-1-TR] Sep 11 at 11:45am </a></li>
                  <li><a class= "wd-fg-color-red text-decoration-none" href="#">Lecture CS4550 12631 Web Development SEC 01 Fall 2023 [BOS-1-TR] Sep 7 at 9:30am</a></li>
                  <li><a class= "wd-fg-color-red text-decoration-none" href="#">Lecture CS4550 12631 Web Development SEC 01 Fall 2023 [BOS-1-TR] Sep 7 at 11:45am</a></li>
               </ul>
        </td>
    );
}

export default CourseStatus;