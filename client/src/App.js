import * as React from 'react';
import LoadingStub from "./Components/LoadingStub";
import st from './Assets/Styles/App.module.css'
import DialogWindow from "./Components/DialogWindow";
import axios from "axios";
import _ from 'lodash'
import Paginator from "./Components/Paginator";
import TableHeader from "./Components/TableHeader";
import FilterConditions from "./Components/FilterConditions";

const App = () => {
    const [items, setItems] = React.useState({});

    const [paginatedPosts, setPaginatedPosts] = React.useState(items);

    const [order, setOrder] = React.useState('up')

    const [filterType, setFilterType] = React.useState('');
    const [filterOptions, setFilterOptions] = React.useState('');
    const [filtrationReq, setFiltrationReq] = React.useState('');

    const [isLoading, setIsLoading] = React.useState(true);
    const [isOpen, setOpen] = React.useState(false);

    React.useEffect(() => {
        let cleanupFunction = false
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/items')
                if (!cleanupFunction) {
                    setItems(response.data)
                    setPaginatedPosts(_(response.data).slice(0).take(pageSize).value())
                }
                setIsLoading(false)
            } catch (e) {
                console.error(e.message)
            }
        }
        fetchData()
        return () => cleanupFunction = true
    }, [isOpen])


    const handleSort = (col) => {
        if (order === 'up') {
            const sorted = paginatedPosts.sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            )
            setPaginatedPosts(sorted)
            setOrder('dwn')
        }
        if (order === 'dwn') {
            const sorted = paginatedPosts.sort((a, b) =>
                a[col] < b[col] ? 1 : -1
            )
            setPaginatedPosts(sorted)
            setOrder('up')
        }
    }


    const pageSize = 5
    const pageCount = items ? Math.ceil(items.length / pageSize) : 0
    const pages = _.range(1, pageCount + 1)

    if (isLoading) {
        return (
            <LoadingStub/>
        )
    }

    return (
        <div className={st.wrapper}>
            <div className={st.wrapper_container}>
                <table>
                    <TableHeader
                        isResults={false}
                        setFilterType={setFilterType}
                        filterType={filterType}
                        handleSort={handleSort}
                        filtrationReq={filtrationReq}
                        setFiltrationReq={setFiltrationReq}
                        setFilterOptions={setFilterOptions}
                        filterOptions={filterOptions}
                    />
                    <tbody>
                    {
                        filtrationReq === '' ? (
                            <>
                                {
                                    paginatedPosts.map(item => (
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
                                    ))
                                }
                            </>
                        ) : (
                                <FilterConditions
                                    items={items}
                                    filtrationReq={filtrationReq}
                                    filterType={filterType}
                                    filterOptions={filterOptions}
                                />
                        )
                    }
                    <tr>
                        <td>
                            <Paginator
                                pages={pages}
                                items={items}
                                setPaginatedPosts={setPaginatedPosts}
                                pageSize={pageSize}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={st.wrapper_action}>
                <button
                    onClick={() => setOpen(true)}
                    className={st.wrapper_action_btn}
                > +
                </button>
            </div>
            {
                isOpen ? (
                    <DialogWindow setOpen={setOpen}/>
                ) : null
            }
        </div>
    );
}

export default App;