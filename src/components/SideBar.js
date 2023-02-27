import React from "react";
import TreeView from "@mui/lab/TreeView";
import { Collapse } from "antd";
import { Resizable } from "re-resizable";
import TreeItem from "@mui/lab/TreeItem";

const { Panel } = Collapse;

const SideBar = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Collapse
      defaultActiveKey={["0"]}
      onChange={onChange}
      className="side-bar"
      style={{
        borderRadius: 0,
        overflow: "hidden",
      }}
    >
      <Panel
        header="Category 1"
        key="1"
        className="category"
        style={{
          borderRadius: 0,
        }}
      >
        <TreeView
          aria-label="file system navigator"
          sx={{
            height: 277,
            flexGrow: 1,
            maxWidth: 230,
            overflowY: "auto",
          }}
        >
          <TreeItem nodeId="1" label="Folder 1">
            <TreeItem nodeId="2" label="File 1" />
            <TreeItem nodeId="2" label="File 2" />
            <TreeItem nodeId="2" label="File 3" />
            <TreeItem nodeId="2" label="File 4" />
            <TreeItem nodeId="2" label="File 5" />
            <TreeItem nodeId="2" label="File 6" />
            <TreeItem nodeId="2" label="File 7" />
            <TreeItem nodeId="2" label="File 8" />
            <TreeItem nodeId="2" label="File 9" />
            <TreeItem nodeId="2" label="File 10" />
          </TreeItem>
          <TreeItem nodeId="3" label="Folder 2">
            <TreeItem nodeId="4" label="File 1" />
            <TreeItem nodeId="4" label="File 2" />
            <TreeItem nodeId="4" label="File 3" />
            <TreeItem nodeId="4" label="File 4" />
            <TreeItem nodeId="4" label="File 5" />
            <TreeItem nodeId="4" label="File 6" />
            <TreeItem nodeId="4" label="File 7" />
            <TreeItem nodeId="4" label="File 8" />
            <TreeItem nodeId="4" label="File 9" />
            <TreeItem nodeId="4" label="File 10" />
          </TreeItem>
        </TreeView>
      </Panel>
      <Panel
        header="Category 2"
        key="2"
        className="category"
        style={{ borderRadius: 0 }}
      >
        <TreeView
          aria-label="file system navigator"
          sx={{
            height: 277,
            flexGrow: 1,
            maxWidth: 230,
            overflowY: "auto",
          }}
        >
          <TreeItem nodeId="1" label="Folder 1">
            <TreeItem nodeId="2" label="File 1" />
            <TreeItem nodeId="2" label="File 2" />
            <TreeItem nodeId="2" label="File 3" />
            <TreeItem nodeId="2" label="File 4" />
            <TreeItem nodeId="2" label="File 5" />
            <TreeItem nodeId="2" label="File 6" />
            <TreeItem nodeId="2" label="File 7" />
            <TreeItem nodeId="2" label="File 8" />
            <TreeItem nodeId="2" label="File 9" />
            <TreeItem nodeId="2" label="File 10" />
          </TreeItem>
          <TreeItem nodeId="3" label="Folder 2">
            <TreeItem nodeId="4" label="File 1" />
            <TreeItem nodeId="4" label="File 2" />
            <TreeItem nodeId="4" label="File 3" />
            <TreeItem nodeId="4" label="File 4" />
            <TreeItem nodeId="4" label="File 5" />
            <TreeItem nodeId="4" label="File 6" />
            <TreeItem nodeId="4" label="File 7" />
            <TreeItem nodeId="4" label="File 8" />
            <TreeItem nodeId="4" label="File 9" />
            <TreeItem nodeId="4" label="File 10" />
          </TreeItem>
        </TreeView>
      </Panel>
    </Collapse>
  );
};

export default SideBar;
