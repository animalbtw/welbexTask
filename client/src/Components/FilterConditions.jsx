import React from 'react';
import FilteredDataComp from "./FilteredDataComp";

const FilterConditions = ({items, filtrationReq, filterType, filterOptions}) => {
    return (
        <>
            {
                items.filter((item) => {
                    if (filtrationReq === '') {
                        return item
                    } else if (
                        filterType === 'header' && filterOptions === 'includes' && item
                            .header.toString().toLowerCase()
                            .includes(filtrationReq) ||
                        filterType === 'amount' && filterOptions === 'includes' && item
                            .amount.toString().toLowerCase()
                            .includes(filtrationReq) ||
                        filterType === 'distance' && filterOptions === 'includes' && item
                            .distance.toString().toLowerCase()
                            .includes(filtrationReq)
                    ) {
                        return item
                    } else if (
                        filterType === 'header' && filterOptions === 'equal' && item
                            .header.toLowerCase() === filtrationReq ||
                        filterType === 'amount' && filterOptions === 'equal' && item
                            .amount.toString().toLowerCase() === filtrationReq ||
                        filterType === 'distance' && filterOptions === 'equal' && item
                            .distance.toString().toLowerCase() === filtrationReq
                    ) {
                        return item
                    } else if (
                        filterType === 'header' && filterOptions === 'more' && item
                            .header.toLowerCase() > filtrationReq ||
                        filterType === 'amount' && filterOptions === 'more' && item
                            .amount > filtrationReq ||
                        filterType === 'distance' && filterOptions === 'more' && item
                            .distance > filtrationReq
                    ) {
                        return item
                    } else if (
                        filterType === 'header' && filterOptions === 'less' && item
                            .header.toLowerCase() < filtrationReq ||
                        filterType === 'amount' && filterOptions === 'less' && item
                            .amount < filtrationReq ||
                        filterType === 'distance' && filterOptions === 'less' && item
                            .distance < filtrationReq
                    ) {
                        return item
                    }
                }).map((item) => (
                    <FilteredDataComp key={item.id} item={item}/>
                ))
            }
        </>
    );
};

export default FilterConditions;
