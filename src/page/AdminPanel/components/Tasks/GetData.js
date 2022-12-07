import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./style.css";

function GetData() {
  const products = [
    {
      preview: 1,
      date: "12.02.2022.",
      taskName: "George",
      service: "Monkey",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 2,
      date: "12.02.2022.",
      taskName: "Jeffrey",
      service: "Giraffe",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 3,
      date: "12.02.2022.",
      taskName: "Alice",
      service: "Giraffe",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 4,
      date: "12.02.2022.",
      taskName: "Foster",
      service: "Tiger",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 5,
      date: "12.02.2022.",
      taskName: "Tracy",
      service: "Bear",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 6,
      date: "12.02.2022.",
      taskName: "Joesph",
      service: "Lion",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 7,
      date: "12.02.2022.",
      taskName: "Tania",
      service: "Deer",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 8,
      date: "12.02.2022.",
      taskName: "Chelsea",
      service: "Tiger",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 9,
      date: "12.02.2022.",
      taskName: "Benedict",
      service: "Tiger",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 10,
      date: "12.02.2022.",
      taskName: "Chadd",
      service: "Lion",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 11,
      date: "12.02.2022.",
      taskName: "Delphine",
      service: "Deer",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 12,
      date: "12.02.2022.",
      taskName: "Elinore",
      service: "Bear",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 13,
      date: "12.02.2022.",
      taskName: "Stokes",
      service: "Tiger",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 14,
      date: "12.02.2022.",
      taskName: "Tamara",
      service: "Lion",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 15,
      date: "12.02.2022.",
      taskName: "Zackery",
      service: "Bear",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
  ];

  const columns = [
    { dataField: "preview", text: "Preview", sort: true },
    { dataField: "date", text: "Date", sort: true },
    { dataField: "taskName", text: "Task name", sort: true },
    { dataField: "service", text: "Services", sort: true },
    { dataField: "size", text: "Size", sort: true },
    { dataField: "status", text: "Status", sort: true },
    { dataField: "download", text: "Download", sort: true },
    { dataField: "imageCount", text: "Image count", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "taskName",
      order: "desc",
    },
  ];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  return (
    <div className="crud-box">
      <div>
        <Nav.Link href="add">
          <Button className="add-btn">New Item</Button>
        </Nav.Link>
      </div>
      <div className="tabela">
        <BootstrapTable
          bootstrap4
          keyField="preview"
          data={products}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
      </div>
    </div>
  );
}

export default GetData;
