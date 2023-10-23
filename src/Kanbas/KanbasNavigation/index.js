import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function KanbasNavigation() {
  const links = [
    { text: 'Account', icon: 'fa-smile', url: 'Account' },
    { text: 'Dashboard', icon: 'fa-circle-notch', url: 'Dashboard' },
    { text: 'Courses', icon: 'fa-chart-bar', url: 'Courses' },
    { text: 'Calendar', icon: 'fa-calendar', url: 'Calendar' },
    { text: 'Inbox', icon: 'fa-comment', url: 'Inbox' },
    { text: 'History', icon: 'fa-clock', url: 'History' },
    { text: 'Studio', icon: 'fa-camera', url: 'Studio' },
    { text: 'Commons', icon: 'fa-share', url: 'Commons' },
    { text: 'Help', icon: 'fa-cog', url: 'Help' }
  ];
  
  const { pathname } = useLocation();

  return (
    <div>
<link href="../labs/a2/index.css" rel="stylesheet"/>
      <link href="../vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="../vendors/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet"/>
      <td width="8" valign="top">
      <ul style={{ padding: '0' }} className={`wd-bg-color-black  `}>
        {links.map((link, index) => (
          <li key={index} className={`text-center ${pathname.includes(link.url) && "wd-bg-color-white"}`}>
            <Link
              to={link.url}
              className={`text-decoration-none ${pathname.includes(link.url) ? "wd-fg-color-red" : "wd-fg-color-white"}`}
            >
              <i className={`fa ${link.icon} ${pathname.includes(link.url) ? "wd-fg-color-black" : "wd-fg-color-red"}`} style={{fontSize: '2em'}}></i><br />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </td>
    </div>  
  );
}

export default KanbasNavigation;

