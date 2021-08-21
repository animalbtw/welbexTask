import * as React from 'react';
import st from '../Assets/Styles/DialogWindow.module.css'

const DialogWindow = ({setOpen}) => {
    const [header, setHeader] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [distance, setDistance] = React.useState('')

    const sendHandler = () => {
        const newItem = {
            'header': header,
            'amount': amount,
            'distance': distance
        }
        fetch('http://localhost:5000/api/items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
            .then(response => response.json())
            .catch(e => console.log(e.message))
        setOpen(false)
    }

    return (
        <div className={st.wrapper}>
            <div className={st.wrapper_window}>
                <div className={st.wrapper_window_header}>
                    Добавить новую запись
                </div>
                <div className={st.wrapper_window_inputPlace}>
                    <input
                        onChange={e => setHeader(e.target.value)}
                        value={header}
                        className={st.inputs}
                        type="text"
                        placeholder={'Название'}
                    />
                </div>
                <div className={st.wrapper_window_inputPlace}>
                    <input
                        onChange={e => setAmount(e.target.value)}
                        value={amount}
                        className={st.inputs}
                        type="number"
                        placeholder={'Количество'}
                    />
                </div>
                <div className={st.wrapper_window_inputPlace}>
                    <input
                        onChange={e => setDistance(e.target.value)}
                        value={distance}
                        className={st.inputs}
                        type="number"
                        placeholder={'Растояние'}
                    />
                </div>
                <div className={st.actions}>
                    <button
                        onClick={() => setOpen(false)}
                        className={st.action_cancel}>
                        Закрыть
                    </button>
                    <button
                        className={st.submitBtn}
                        disabled={header ? (amount ? (!distance) : true) : true}
                        onClick={() => sendHandler()}
                    >
                        Создать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DialogWindow;
