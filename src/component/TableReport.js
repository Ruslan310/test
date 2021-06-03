import React from 'react';
import '../style/table.css'
import "react-virtualized/styles.css"

const TableReport = (props) => {
    return (
        <div>
            <table className='table'>
                <thead>
                <tr>
                    <th></th>
                    <th colSpan='2'>Заказали</th>
                    <th colSpan='2'>Вернули</th>
                    <th colSpan='2'>Продали</th>
                    <th colSpan='2'>Осталось на ТТ</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Склад</th>
                    <th>Поставщик</th>
                    <th>Склад</th>
                    <th>Поставщик</th>
                    <th>Склад</th>
                    <th>Поставщик</th>
                    <th>Склад</th>
                    <th>Поставщик</th>
                </tr>
                </thead>
                <tbody>
                    <td>Сайт 911</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tbody>
            </table>
        </div>
    );
};

export default TableReport;