import Accordion from "./Accordion";
import AppBar from "./AppBar";
import Avatar from "./Avatar";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import Chip from "./Chip";
import CardActions from "./CardActions";
import Checkbox from "./Checkbox";
import Divider from "./Divider";
import Drawer from "./Drawer";
import Dialog from "./Dialog";
import DateTimePicker from "./DateTimePicker";
import IconButton from "./IconButton";

import Link from "./Link";
import LinearProgress from "./LinearProgress";
import List from "./List";
import ListItemButton from "./ListItemButton"; // Corrected camelCasing
import ListItemIcon from "./ListItemIcon";
import ListItemText from "./ListItemText";

import Paper from "./Paper";
import Popover from "./Popover";
import Pagination from "./Pagination";
import Slider from "./Slider";
import Tooltip from "./Tooltip";
import Toolbar from "./Toolbar";
import Tabs from "./Tabs";
import Tab from "./Tab";
import Table from "./Table";
import TouchRipple from "./TouchRipple";
import Typography from "./Typography";
import { merge } from "lodash";
import Input from "./Input";
export default function ComponentStyleOverrides(themeOptions:any): any {
  return merge(
    Accordion(themeOptions),
    AppBar(themeOptions),
    Avatar(themeOptions),
    Badge(themeOptions),
    Button(themeOptions),
    Card(themeOptions),
    CardHeader(themeOptions),
    CardContent(themeOptions),
    Chip(themeOptions),
    CardActions(themeOptions),
    Checkbox(themeOptions),
    Divider(themeOptions),
    Drawer(themeOptions),
    Dialog(themeOptions),
    DateTimePicker(themeOptions),
    Input(themeOptions),
    IconButton(themeOptions),
    Link(),
    LinearProgress(),
    List(themeOptions),
    ListItemButton(themeOptions),
    ListItemIcon(themeOptions),
    ListItemText(themeOptions),
    Paper(themeOptions),
    Popover(themeOptions),
    Pagination(themeOptions),
    Slider(themeOptions),
    Tooltip(themeOptions),
    Toolbar(themeOptions),
    Tabs(themeOptions),
    Tab(themeOptions),
    Table(themeOptions),
    TouchRipple(themeOptions),
    Typography(themeOptions),
  )
}
