import {
    TIME_START_911,
    TIME_END_911,
    REPORT_911,
    FETCH_REPORT_911,
    SET_SORT,
    SET_FILTER,
    RESET_FILTER
} from "../redux/action";

const initialState = {
    timeStart911: null,
    timeEnd911: null,
    report911: [],
    report911Filtered: null,
    direction: 'ascending',
    isLoader: false
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case TIME_START_911:
            return {...state, timeStart911: action.value}
        case TIME_END_911:
            return {...state, timeEnd911: action.value}
        case REPORT_911:
            return {...state, isLoader: true}
        case FETCH_REPORT_911:
            return {...state, report911: action.data, report911Filtered: action.data, isLoader: false}
        case SET_SORT:
            let key = action.key
            let SortIP = state.report911Filtered.slice()
            let direction = state.direction
            SortIP.sort((a, b) => {
                if (a[key] < b[key]) {
                    return direction === 'ascending' ? -1 : 1;
                }
                if (a[key] > b[key]) {
                    return direction === 'ascending' ? 1 : -1;
                }
                return 0
            })
            if (direction === 'ascending') {
                direction = 'descending'
            } else {
                direction = 'ascending'
            }
            return {...state, report911Filtered: SortIP, direction: direction}
        case SET_FILTER:
            let keyFilter = action.key
            console.log(keyFilter)
            let stText = action.value
            let stOnline = state.report911.slice()

            for (let i = 0; i < stOnline.length; i++) {
                let result = false
                stOnline[i].isFilter = false
                    for (let j = 0; j < keyFilter.length; j++) {
                        if (stOnline[i][keyFilter[j]].toLowerCase().includes(stText.toLowerCase())) {
                            result = true
                        }
                    }
                    if (result) {
                        stOnline[i].isFilter = true
                    }
            }
            return {...state, report911Filtered: stOnline}
        case RESET_FILTER:
            let filtrlist = state.report911.slice()
            for (let i = 0; i < filtrlist.length; i++) {
                filtrlist[i].isFilter = true
            }
            return {...state, report911Filtered: filtrlist}
        default:
            return state
    }
}