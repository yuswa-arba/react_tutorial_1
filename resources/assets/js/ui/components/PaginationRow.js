import React from 'react';
import './Pagination.css'

const paginationRow = (props) => {

    let pages = []

    if (!props.pagination) {
        return null
    }

    if (props.pagination.total_pages > 1) {
        if (props.pagination.total_pages <= 10) {
            for (let i = 0; i < props.pagination.total_pages; i++) {
                pages.push(
                    <li key={i}
                        onClick={() => props.onMove(i + 1)}
                        className={props.pagination.current_page === i + 1 ? 'active' : ''}>
                        <a>{i + 1}</a>
                    </li>
                )
            }
        } else {
            // Check
            let checkEnd = 0
            if (props.pagination.total_pages > props.pagination.current_page) {
                checkEnd = props.pagination.total_pages - props.pagination.current_page
            }


            // Start
            let startLoop = props.pagination.current_page - 1
            if (props.pagination.total_pages == props.pagination.current_page) {
                startLoop = props.pagination.current_page - 10
            } else if (checkEnd < 10) {
                startLoop = props.pagination.total_pages - 10
            }


            // End
            let endLoop = 9
            if (props.pagination.total_pages == props.pagination.current_page) {
                endLoop = props.pagination.current_page - 1
            } else if (checkEnd < 10) {
                endLoop = props.pagination.total_pages - 1
            } else if (props.pagination.current_page != 1) {
                endLoop = 8 + props.pagination.current_page
            }


            for (let i = startLoop; i <= endLoop; i++) {
                pages.push(
                    <li key={i}
                        onClick={() => props.onMove(i + 1)}
                        className={props.pagination.current_page === i + 1 ? 'active' : ''}>
                        <a>{i + 1}</a>
                    </li>
                )
            }

        }


        // Prev Button if exist
        if (props.pagination.links.previous) {
            pages.unshift(
                <li key={'prev'} onClick={() => props.onMove(props.pagination.current_page - 1)}>
                    <a> Prev </a>
                </li>
            )
        }

        // Next Button if exist
        if (props.pagination.links.next) {
            pages.push(
                <li key={'next'} onClick={() => props.onMove(props.pagination.current_page + 1)}>
                    <a> Next </a>
                </li>
            )
        }


        // First Button and Last Button if > 10
        if (props.pagination.total_pages > 10) {

            if (props.pagination.current_page != 1) {
                pages.unshift(
                    <li key={'first'} onClick={() => props.onMove(1)}>
                        <a> First </a>
                    </li>
                )
            }

            pages.push(
                <li key={'last'} onClick={() => props.onMove(props.pagination.total_pages)}>
                    <a> Last </a>
                </li>
            )
        }

    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-3">
                    <p>Page {props.pagination.current_page} / {props.pagination.total_pages} </p>
                </div>
                <div className="col-md-6 text-center">
                    <ul className={'pagination list-center'}>
                        {pages}
                    </ul>
                </div>
                <div className="col-md-3">
                    <p className="text-right">Results {props.pagination.count} of {props.pagination.total}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default paginationRow;
