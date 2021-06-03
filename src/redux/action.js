export const TIME_START_911 = 'TIME_START_911'
export const TIME_END_911 = 'TIME_END_911'
export const FETCH_REPORT_911 = 'FETCH_REPORT_911'
export const REPORT_911 = 'REPORT_911'
export const SET_SORT = 'SET_SORT'
export const SET_FILTER = 'SET_FILTER'
export const RESET_FILTER = 'RESET_FILTER'

export const valueTimeStart911 = (value) => ({
    type: TIME_START_911,value
})
export const valueTimeEnd911 = (value) => ({
    type: TIME_END_911,value
})
export const dataReport911 = (value) => ({
    type: REPORT_911, value
})
export const sortId = (key) => ({
    type: SET_SORT, key
})
export const setFilter = (value,key) => ({
    type: SET_FILTER, value,key
})

export const resetFilter = () => ({
    type: RESET_FILTER
})
