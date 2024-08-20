"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import dynamic from "next/dynamic";
import React from "react";
import { DetailCharts, useDetailCharts } from "./helper/useCharts";

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const Chart: React.FC = () => {
  const { dataDetails } = useDetailCharts("");
  return (
    <>
      <DetailCharts.Provider value={{ dataDetails }}>
        <Breadcrumb pageName="Chart" />
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          <ChartOne />
          <ChartTwo />
          <ChartThree />
        </div>
      </DetailCharts.Provider>
    </>
  );
};

export default Chart;
