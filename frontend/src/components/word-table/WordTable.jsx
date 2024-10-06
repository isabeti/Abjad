// import { tab } from "@testing-library/user-event/dist/tab";
// import { useData } from "../../context/dataContext";
// import TableHeadItem from "./TableHeadItem";
// import TableItem from "./TableItem";
// import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";

// const data = [
//   {
//     word: "صفحه اول",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "امیر محمد",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
//   {
//     word: "شاهین",
//     kabir: 13,
//     saghir: 24,
//     vasit: 17,
//     jostojo: 45,
//   },
// ];

// const WordTable = () => {
//   let [currentItems, setCurrentItems] = useState([]);
//   let [pageCount, setPageCount] = useState(0);
//   let [itemOffset, setItemOffset] = useState(0);
//   let itemsPerPage = 10;

// const { selectedLang, tableData } = useData();

//   console.log(pageCount);

//   useEffect(() => {
//     let endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(data.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(data.length / itemsPerPage));
//     // setPageCount(tableData.count);
//   }, [itemOffset, itemsPerPage, data]);

//   let handlePageClick = (event) => {
//     let newOffset = (event.selected * itemsPerPage) % data.length;
//     setItemOffset(newOffset);

//     console.log("itemOffset", itemOffset);
//   };

//   return (
//     <div
//       className="md:mt-[2.875rem] mt-[2.875rem] w-full flex flex-col items-center justify-center z-20 relative"
//       style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
//     >
//       <div className="w-full px-[1rem] md:px-[4.3125rem] py-[1.875rem] border border-[#6D7FDD] rounded-[1.4375rem]">
//         <div className="w-full word-table h-full">
//           <div
//             className="text-[#52545B] font-medium mb-[1.5rem] flex w-full justify-between items-center"
//             style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
//           >
//             <TableHeadItem>
//               {selectedLang === "ir" ? "کلمه" : "Word"}
//             </TableHeadItem>
//             <TableHeadItem>
//               {selectedLang === "ir" ? "کبیر" : "Jewish"}
//             </TableHeadItem>
//             <TableHeadItem>
//               {selectedLang === "ir" ? "صغیر" : "English"}
//             </TableHeadItem>
//             <TableHeadItem>
//               {selectedLang === "ir" ? "وسیط" : "Simple"}
//             </TableHeadItem>
//             <TableHeadItem>
//               {selectedLang === "ir" ? "جستجو" : "Searches"}
//             </TableHeadItem>
//           </div>
//           {currentItems.map((item, index) => (
//             <div
//               key={index}
//               className="word-table-row w-full flex justify-between items-center text-center gap-[41px]"
//               style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
//             >
//               <TableItem
//                 cln={`${
//                   selectedLang === "ir" ? "mr-[0.5rem]" : "ml-[0.5rem]"
//                 } md:max-w-[20%] max-w-[1.8rem]`}
//               >
//                 {item.word}
//               </TableItem>
//               <TableItem>{item.kabir}</TableItem>
//               <TableItem>{item.saghir}</TableItem>
//               <TableItem>{item.vasit}</TableItem>
//               <TableItem cln="ml-[0.5rem]">{item.jostojo}</TableItem>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel={
//           <svg
//             width="38"
//             height="38"
//             viewBox="0 0 38 38"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M19 31.92C11.856 31.92 6.07996 26.144 6.07996 19C6.07996 11.856 11.856 6.08002 19 6.08002C26.144 6.08002 31.92 11.856 31.92 19C31.92 26.144 26.144 31.92 19 31.92ZM19 7.60002C12.692 7.60002 7.59996 12.692 7.59996 19C7.59996 25.308 12.692 30.4 19 30.4C25.308 30.4 30.4 25.308 30.4 19C30.4 12.692 25.308 7.60002 19 7.60002Z"
//               fill="#173BFB"
//             />
//             <path
//               d="M18.772 26.372L17.708 25.308L24.016 19L17.708 12.692L18.772 11.628L26.144 19L18.772 26.372Z"
//               fill="#173BFB"
//             />
//             <path d="M12.16 18.24H25.08V19.76H12.16V18.24Z" fill="#173BFB" />
//           </svg>
//         }
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={2}
//         pageCount={pageCount}
//         previousLabel={
//           <svg
//             width="40"
//             height="40"
//             viewBox="0 0 40 40"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M19.8916 7.08045C27.0354 7.02042 32.8597 12.7477 32.9198 19.8914C32.9798 27.0352 27.2525 32.8595 20.1088 32.9195C12.965 32.9796 7.1407 27.2523 7.08066 20.1086C7.02063 12.9648 12.7479 7.14048 19.8916 7.08045ZM20.096 31.3996C26.4038 31.3466 31.4528 26.212 31.3998 19.9042C31.3468 13.5964 26.2122 8.54739 19.9044 8.6004C13.5966 8.65341 8.5476 13.788 8.60061 20.0958C8.65362 26.4036 13.7882 31.4526 20.096 31.3996Z"
//               fill="#173BFB"
//             />
//             <path
//               d="M20.1663 12.6264L21.2392 13.6814L14.9844 20.0422L21.3452 26.2969L20.2902 27.3698L12.8565 20.06L20.1663 12.6264Z"
//               fill="#173BFB"
//             />
//             <path
//               d="M26.8463 20.7025L13.9268 20.8111L13.914 19.2911L26.8335 19.1826L26.8463 20.7025Z"
//               fill="#173BFB"
//             />
//           </svg>
//         }
//         renderOnZeroPageCount={null}
//         containerClassName="pagination"
//         pageClassName="page-num"
//         pageLinkClassName="page-num-link"
//         previousClassName="prev page-num"
//         nextClassName="next page-num"
//         activeLinkClassName="active"
//         disabledClassName="disabled"
//         disabledLinkClassName="disabled-link"
//         breakClassName="break"
//       />
//     </div>
//   );
// };

// export default WordTable;

import React, { useEffect, useState } from "react";
import { useData } from "../../context/dataContext";
import TableHeadItem from "./TableHeadItem";
import TableItem from "./TableItem";
import ReactPaginate from "react-paginate";

const WordTable = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(10);

  const { selectedLang, enteredWord, selectedFilterValue, boxesData } =
    useData();

  const filter =
    selectedFilterValue.toLowerCase() == "همه"
      ? "all"
      : selectedFilterValue.toLowerCase() == "کبیر"
      ? "kabir"
      : selectedFilterValue.toLowerCase() == "صغیر"
      ? "saghir"
      : selectedFilterValue.toLowerCase() == "وسیط"
      ? "vasit"
      : selectedFilterValue.toLowerCase();

  const fetchData = async (page) => {
    const response = await fetch(
      `http://abjad.ca/api/v1/${
        selectedLang === "ir" ? "fa" : "en"
      }-search/${enteredWord}${`?page=${page}`}${`&filter_type=${filter}`}`
    );
    const data = await response.json();
    setCurrentItems(data.results);
    setPageCount(Math.ceil(data.count / data.page_size));
  };

  console.log(selectedFilterValue.toLowerCase());

  useEffect(() => {
    fetchData(1);
  }, [selectedFilterValue, boxesData]);

  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    fetchData(newPage);
  };

  return (
    <div
      className="md:mt-[2.875rem] mt-[2.875rem] w-full flex flex-col items-center justify-center z-20 relative"
      style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
    >
      <div className="w-full px-[1rem] md:px-[4.3125rem] py-[1.875rem] border border-[#6D7FDD] rounded-[1.4375rem]">
        <div className="w-full word-table h-full">
          <div
            className="text-[#52545B] font-medium mb-[1.5rem] flex w-full justify-between items-center"
            style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
          >
            <TableHeadItem>
              {selectedLang === "ir" ? "کلمه" : "Word"}
            </TableHeadItem>
            <TableHeadItem>
              {selectedLang === "ir" ? "کبیر" : "Hebrew"}
            </TableHeadItem>
            <TableHeadItem>
              {selectedLang === "ir" ? "صغیر" : "English"}
            </TableHeadItem>
            <TableHeadItem>
              {selectedLang === "ir" ? "وسیط" : "Simple"}
            </TableHeadItem>
            <TableHeadItem>
              {selectedLang === "ir" ? "جستجو" : "Searches"}
            </TableHeadItem>
          </div>
          {currentItems.map((item, index) => (
            <div
              key={index}
              className={`word-table-row w-full flex justify-between items-center text-center gap-[41px]  ${
                enteredWord == item.word ? "active" : ""
              }`}
              style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
            >
              <TableItem
                cln={`${
                  selectedLang === "ir" ? "mr-[0.5rem]" : "ml-[0.5rem]"
                } md:max-w-[20%] max-w-[1.8rem]`}
              >
                {item.word}
              </TableItem>
              {selectedLang === "ir" ? (
                <>
                  <TableItem>{item.kabir_abjad}</TableItem>
                  <TableItem>{item.saghir_abjad}</TableItem>
                  <TableItem>{item.vasit_abjad}</TableItem>
                </>
              ) : (
                <>
                  <TableItem>{item.abjad_hebrew}</TableItem>
                  <TableItem>{item.abjad_english}</TableItem>
                  <TableItem>{item.abjad_simple}</TableItem>
                </>
              )}

              <TableItem cln="ml-[0.5rem]">{item.search}</TableItem>
            </div>
          ))}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 31.92C11.856 31.92 6.07996 26.144 6.07996 19C6.07996 11.856 11.856 6.08002 19 6.08002C26.144 6.08002 31.92 11.856 31.92 19C31.92 26.144 26.144 31.92 19 31.92ZM19 7.60002C12.692 7.60002 7.59996 12.692 7.59996 19C7.59996 25.308 12.692 30.4 19 30.4C25.308 30.4 30.4 25.308 30.4 19C30.4 12.692 25.308 7.60002 19 7.60002Z"
              fill="#173BFB"
            />
            <path
              d="M18.772 26.372L17.708 25.308L24.016 19L17.708 12.692L18.772 11.628L26.144 19L18.772 26.372Z"
              fill="#173BFB"
            />
            <path d="M12.16 18.24H25.08V19.76H12.16V18.24Z" fill="#173BFB" />
          </svg>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8916 7.08045C27.0354 7.02042 32.8597 12.7477 32.9198 19.8914C32.9798 27.0352 27.2525 32.8595 20.1088 32.9195C12.965 32.9796 7.1407 27.2523 7.08066 20.1086C7.02063 12.9648 12.7479 7.14048 19.8916 7.08045ZM20.096 31.3996C26.4038 31.3466 31.4528 26.212 31.3998 19.9042C31.3468 13.5964 26.2122 8.54739 19.9044 8.6004C13.5966 8.65341 8.5476 13.788 8.60061 20.0958C8.65362 26.4036 13.7882 31.4526 20.096 31.3996Z"
              fill="#173BFB"
            />
            <path
              d="M20.1663 12.6264L21.2392 13.6814L14.9844 20.0422L21.3452 26.2969L20.2902 27.3698L12.8565 20.06L20.1663 12.6264Z"
              fill="#173BFB"
            />
            <path
              d="M26.8463 20.7025L13.9268 20.8111L13.914 19.2911L26.8335 19.1826L26.8463 20.7025Z"
              fill="#173BFB"
            />
          </svg>
        }
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        pageLinkClassName="page-num-link"
        previousClassName="prev page-num"
        nextClassName="next page-num"
        activeLinkClassName="active"
        disabledClassName="disabled"
        disabledLinkClassName="disabled-link"
        breakClassName="break"
      />
    </div>
  );
};

export default WordTable;
