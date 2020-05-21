import style from "./Paginator.module.css";
import React from "react";
const Paginator=({totalPage,perPage,setCurPage,onPageChanged,currentPage})=>{
    let pagesCount = Math.ceil(totalPage / perPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    console.log(setCurPage);
   return  pages.map(p => {
       return <span onClick={() => {onPageChanged(p)}}
                    className={(currentPage == p) && style.active}>{p}</span>
   });
}

export default Paginator;
