import React from 'react';
import '../style/table.css'
import "react-virtualized/styles.css"

const TableContent = (props) => {
    return (
        <div>
            <table className='table'>
                <thead>
                <tr>
                    <th onClick={() =>{props.sort('Apteka')}}>Аптека</th>
                    <th>Заказ №</th>
                    <th>Сума заказа</th>
                    <th>Телефон</th>
                    <th onClick={() =>{props.sort('date')}}>Дата заказа</th>
                    <th onClick={() =>{props.sort('time')}}>Время заказа</th>
                    <th>Тип заказа</th>
                    <th>Тип оплаты</th>
                </tr>
                </thead>
                <tbody>
                {props.report911 && props.report911.map(post => {
                        if(post.isFilter){
                            return (
                                <tr key={Math.random()}>
                                    <td>{post.Apteka}</td>
                                    <td>{post.zakaz}</td>
                                    <td>{post.suma}</td>
                                    <td>{post.phone}</td>
                                    <td>{post.date}</td>
                                    <td>{post.time}</td>
                                    <td>{post.type}</td>
                                    <td>{post.oplata}</td>
                                </tr>
                            )
                        }
                    }
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TableContent;