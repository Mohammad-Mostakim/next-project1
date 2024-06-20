/** @format */

// assets
import {
  AreaChartOutlined,
  PieChartOutlined,
  FallOutlined,
  LineChartOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  AreaChartOutlined,
  PieChartOutlined,
  FallOutlined,
  LineChartOutlined,
  BarChartOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const Chart = {
  id: "chart",
  title: "Chart-View",
  type: "collapse",
  url: "chart-view",
  target: false,
  breadcrumbs: true,
  icon: icons.AreaChartOutlined,
  children: [
    {
      id: "overview-chart",
      title: "Overview Chart",
      type: "collapseItem",
      url: "chart-view/overview-chart",
      icon: icons.BarChartOutlined,
      target: false,
      breadcrumbs: true,
    },
    {
      id: "daily-chart",
      title: "Daily Chart",
      type: "collapseItem",
      url: "chart-view/daily-chart",
      icon: icons.LineChartOutlined,
      target: false,
      breadcrumbs: true,
    },
    {
      id: "monthly-chart",
      title: "Monthly Chart",
      type: "collapseItem",
      url: "chart-view/monthly-chart",
      icon: icons.FallOutlined,
      target: false,
      breadcrumbs: true,
    },
    {
      id: "pie-chart",
      title: "Pie Chart",
      type: "collapseItem",
      url: "chart-view/pie-chart",

      icon: icons.PieChartOutlined,
      target: false,
      breadcrumbs: true,
    },
  ],
};

export default Chart;
