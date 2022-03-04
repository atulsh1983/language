import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export default function PieChartUI() {
  return (
    
      <div style={{'width':'400px','margin':'0 auto'}}>
      <PieChart
        data={[
          { title: "Onesdsad", value: 2, color: "blue" },
          { title: "Two", value: 6, color: "red" },
          { title: "Three", value: 2, color: "green" }
        ]}
        
      />
      </div>
     
  );
}
