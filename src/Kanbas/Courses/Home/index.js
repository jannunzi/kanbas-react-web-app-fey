import React from "react";
import ModuleList from "../Modules/ModulesList";
import CourseStatus from "./coursestatus";

function Home() {
  return (
    <div>
  <table style={{width: "100%"}}>
    <tr>
      <td style={{verticalAlign: "top"}}>
        <ModuleList />
      </td>
      <td style={{verticalAlign: "top"}}>
        <CourseStatus />
      </td>
    </tr>
  </table>
</div>
  );
}
export default Home;

