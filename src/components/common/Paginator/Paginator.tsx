import React from 'react'
import s from "./Paginator.module.css";

type PaginatorType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorType ) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let newPages;
    if (props.currentPage <= 5) {
        newPages = pages.slice(0, 10)
    } else {
        newPages = pages.slice(props.currentPage - 5, props.currentPage + 5)
    }

    return <div>
        {newPages.map((p, index) => {
            return <span key={index}
                         className={props.currentPage === p ? s.selectedPage : ''}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}
            >{p} </span>
        })}
    </div>
}
