import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import * as pagination from "./Pagination.styled"



export const Pagination = ({ onPageClick, pageCount = 1, currentPage = 1 }) => {
    return (
        <div className={pagination.PaginatioContainer}>
            <ReactPaginate
                nextLabel=""
                onPageChange={onPageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel=""
                pageClassName={pagination.item}
                pageLinkClassName={pagination.link}
                previousClassName={pagination.item}
                previousLinkClassName={pagination.prevLink}
                nextClassName={pagination.item}
                nextLinkClassName={pagination.nextLink}
                breakLabel="..."
                breakClassName={pagination.item}
                breakLinkClassName={pagination.link}
                activeClassName={pagination.active}
                renderOnZeroPageCount={null}
                forcePage={currentPage - 1}
            />
        </div>
    );
};

Pagination.propTypes = {
    onPageClick: PropTypes.func.isRequired,
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
};


