import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function PieChartUI() {
  return (
    
      <div style={{'width':'400px','margin':'0 auto'}}>
      <PieChart
        data={[
          { title: "One", value: 2, color: "#4791db" },
          { title: "Two", value: 6, color: "#e57373" },
          { title: "Three", value: 2, color: "#4caf50" }
        ]}
        
      />
      </div>
     
  );
}
