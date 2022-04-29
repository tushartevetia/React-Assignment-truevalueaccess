import React, { useState } from "react";
var i = 1;
export const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  const [presentPage, setPresentPage] = useState(0);
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(5);

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const next = () => {
    if (presentPage === i * 5) {
      setStartValue(i * 5);
      setEndValue(i * 5 + 5);
      i++;
      console.log(i);
    }
  };
  const prev = () => {
    if (presentPage === i * 5 - 4) {
      setStartValue(i * 5 - 10);
      setEndValue(i * 5 - 5);
      i--;
    }
  };

  return (
    <div>
      <ul className="flex flex-row flex-wrap float-right">
        {pageNumbers.includes(presentPage - 1) && (
          <a
            className=" border p-2 m-1 text-slate-600 cursor-pointer"
            onClick={() => {
              setPresentPage(presentPage - 1);
              paginate(presentPage - 1);
              prev();
            }}
          >
            {" "}
            Prev{" "}
          </a>
        )}

        {pageNumbers.slice(startValue, endValue).map((number) => (
          <li
            key={number}
            className={
              number === presentPage
                ? "text-blue-600 border p-2 m-1 cursor-pointer "
                : "border p-2 m-1 text-slate-600 cursor-pointer"
            }
          >
            <a
              onClick={() => {
                setPresentPage(number);
                paginate(number);
              }}
              className="cursor-pointer"
            >
              {number}
            </a>
          </li>
        ))}

        {pageNumbers.includes(presentPage + 1) && (
          <a
            className=" border p-2 m-1 text-slate-600 cursor-pointer"
            onClick={() => {
              setPresentPage(presentPage + 1);
              paginate(presentPage + 1);
              next();
            }}
          >
            {" "}
            Next{" "}
          </a>
        )}
      </ul>
    </div>
  );
};
