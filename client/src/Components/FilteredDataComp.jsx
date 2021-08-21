import React from 'react';
import st from "../Assets/Styles/App.module.css";

const FilteredDataComp = ({item}) => {
    return (
        <tr key={item.id}>
            <td className={st.tableItem}>
                {item.createdAt.split('T')[0]}
            </td>
            <td className={st.tableItem}>
                {item.header}
            </td>
            <td className={st.tableItem}>
                {item.amount}
            </td>
            <td className={st.tableItem}>
                {item.distance}
            </td>
        </tr>
    );
};

export default FilteredDataComp;
