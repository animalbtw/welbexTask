import React from 'react';
import st from "../Assets/Styles/Paginator.module.css";
import _ from "lodash";

const Paginator = ({pages, setPaginatedPosts, items, pageSize}) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const pagination = (pageNum) => {
        setCurrentPage(pageNum)
        const startIndex = (pageNum - 1) * pageSize
        const paginatedPost = _(items).slice(startIndex).take(pageSize).value()
        setPaginatedPosts(paginatedPost)
    }

    return (
        <div className={st.wrapper}>
            {
                pages.map((page) => (
                    <div
                        key={page}
                        onClick={() => pagination(page)}
                        className={page === currentPage ? st.activePage : st.pageItem}
                    >
                        {page}
                    </div>
                ))
            }
        </div>
    );
};

export default Paginator;
