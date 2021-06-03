import {
    REPORT_911,
    FETCH_REPORT_911,
} from '../redux/action';
import { put, takeLatest, all } from 'redux-saga/effects';

// saga
function* dataReport911(action) {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.value)
    }
    console.log('saga', action.value)
    let data = yield fetch(`https://tmc.lll.org.ua/dashboard_api/site911`, options)
        .then( response => response.json());
    let newList =[]
    const format = (dateString) => {
        let time = dateString.split('T')[1].substring(0, 8)
        let arrDate = dateString.split('T')[0].split('-')
        let date = `${arrDate[2]}.${arrDate[1]}.${arrDate[0]}`
        return {date, time}
    }
    console.log(data)
    data.map(item => {
        let parsed = {}
        parsed.typeReport = item.ExtSystem
        parsed.status = item.OrderStatus
        parsed.zakaz = item.orderID.toString()
        parsed.suma = item.orderAmount.toFixed(2)
        parsed.type = item.orderShipping
        parsed.phone = item.orderPhone
        parsed.date = format(item.orderDt).date
        parsed.time = format(item.orderDt).time
        parsed.Apteka = item.apteka
        parsed.oplata = item.orderPayment
        parsed.isFilter = true
        newList.push(parsed)
    })


    yield put({ type: FETCH_REPORT_911, data: newList});
}

function* WatcherSite911() {
    yield takeLatest(REPORT_911, dataReport911)
}

export default function* rootSaga() {
    yield all([
        WatcherSite911(),
    ])
}