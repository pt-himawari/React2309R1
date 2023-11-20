"use client";

import { Card } from "@radix-ui/themes";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";
import React from "react";

// import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const createChartData = () => [
    { label: "Open", value: open },
    { label: "In Progress", value: inProgress },
    { label: "Closed", value: closed },
  ];

  const getIntroOfPage = (label: string) => {
    // Thay đổi logic xử lý dữ liệu mới tại đây
    if (label === "Open") {
      return "IOpen issues";
    } else if (label === "In Progress") {
      return " In Progress issues";
    } else if (label === "Closed") {
      return " Closed issues";
    }
    // Có thể thêm các xử lý khác nếu cần
  };

  const CustomTooltip = ({ payload, label, active }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-slate-50">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc"></p>
        </div>
      );
    }

    return null;
  };
  const getPath = (x: any, y: any, width: any, height: any) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={600} height={300} data={createChartData()}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            // barSize={90}
            barSize={90}
            // style={{ fill: "var(--accent-9)" }}
            fill={"var(--accent-9)"}
            shape={<TriangleBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
