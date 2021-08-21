import React from 'react';
import st from '../Assets/Styles/TableHeader.module.css'

const TableHeader = (props) => {
    return (
        <thead>
        <tr>
            <th>Дата создания</th>
            <th
                className={st.header_item}
                onClick={() => props.handleSort('header')}>
                Название
            </th>
            <th
                className={st.header_item}
                onClick={() => props.handleSort('amount')}>
                Количество
            </th>
            <th
                className={st.header_item}
                onClick={() => props.handleSort('distance')}>
                Расстояние
            </th>
            <th>
                <select
                    value={props.filterType}
                    onChange={e => props.setFilterType(e.target.value)}
                >
                    <option value={''} disabled>Выберите поле для поиска</option>
                    <option value={'header'}>Название</option>
                    <option value={'amount'}>Количество</option>
                    <option value={'distance'}>Растояние</option>
                </select>
            </th>
            <th>
                <select
                    value={props.filterOptions}
                    onChange={e => props.setFilterOptions(e.target.value)}
                >
                    <option value={''} disabled>Фильтрация по</option>
                    <option value={'includes'}>Содержит</option>
                    <option value={'equal'}>Равно</option>
                    <option value={'more'}>Больше</option>
                    <option value={'less'}>Меньше</option>
                </select>
            </th>
            <th>
                <input
                    type="text"
                    value={props.filtrationReq ? props.filtrationReq : ''}
                    onChange={(e) => props.setFiltrationReq(e.target.value)}
                    placeholder={'Найти...'}/>
            </th>
        </tr>
        </thead>
    );
};

export default TableHeader;
