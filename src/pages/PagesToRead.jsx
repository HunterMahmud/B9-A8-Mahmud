import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getDataFromLocalStorage } from "./../utils/LocalStorage";
import { ResponsiveContainer } from "recharts";
import NoPagesToRead from "../components/NoPagesToRead";




const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const localData = getDataFromLocalStorage("read");
  if(localData.length<1) return <NoPagesToRead />
  return (
    <div className="max-w-6xl over min-h-[calc(100vh-100px)] mx-auto">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          className="mx-auto"
          data={localData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 4" />
          <XAxis
          
            dataKey="bookName"
            tick={{
              textAnchor: "middle",
              style: {
                overflow: "hidden",
                whiteSpace: "pre-line",
                textOverflow: "ellipsis",
                fontSize: '10px'
              }
            }}
          />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {localData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
