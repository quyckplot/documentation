/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "tutorial/index",
    "tutorial/setup",
    "tutorial/file-structure",
    "tutorial/load",
    "tutorial/plot",
    "tutorial/process",
  ],
  examplesSidebar: [{ type: "autogenerated", dirName: "examples" }],
  referenceSidebar: [
    {
      type: "category",
      label: "FileData",
      items: ["reference/FileData/index", "reference/FileData/from_file"],
    },
    {
      type: "category",
      label: "DataSet",
      items: [
        "reference/DataSet/index",
        "reference/DataSet/from_files",
        "reference/DataSet/from_regex",
        "reference/DataSet/clear",
        "reference/DataSet/map",
      ],
    },
    {
      type: "category",
      label: "Plotter",
      items: [
        "reference/Plotter/index",
        "reference/Plotter/start_session",
        "reference/Plotter/new_plot",
      ],
    },
  ],
};

module.exports = sidebars;