import React, {FC, useState} from 'react'
import s from "./Paginator.module.css";

type PaginatorType = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}
const portionSize = 10;

export const Paginator: FC<PaginatorType> = ({
                                               pageSize,
                                               totalUsersCount,
                                               currentPage,
                                               onPageChanged,
                                             }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // let newPages;
  // if (props.currentPage <= 5) {
  //     newPages = pages.slice(0, 10)
  // } else {
  //     newPages = pages.slice(props.currentPage - 5, props.currentPage + 5)
  // }

const portionCount = Math.ceil(pagesCount/portionSize);
const [portionNumber, setPortionNumber] = useState(1);
const leftPortionPageNumber = (portionNumber-1)*portionSize + 1;
const rightPortionPageNumber = portionNumber*portionSize;

  return <div>
    {portionNumber > 1 &&
    <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p, index) => {
      return <span key={index}
                   className={currentPage === p ? s.selectedPage : ''}
                   onClick={(e) => {
                     onPageChanged(p)
                   }}
      >{p} </span>
    })}
    {portionCount > portionNumber &&
    <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
  </div>
}
