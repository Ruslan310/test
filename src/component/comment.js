import React, {useRef, useState} from 'react';
import '../style/comment.css'
import {Button, FormControl, Form} from "react-bootstrap";
import {
    valueTimeStart911, valueTimeEnd911, dataReport911, sortId, setFilter,resetFilter
} from "../redux/action";
import {connect} from "react-redux";
import TableContent from "./TableContent";
import Loader from "./loader";
import Modal from "./modal";
import TableReport from "./TableReport";

const mapStateToProps = (state) => ({
    timeStart911: state.comment.timeStart911,
    timeEnd911: state.comment.timeEnd911,
    report911Filtered: state.comment.report911Filtered,
    isLoader: state.comment.isLoader
})

const mapDispatchToProps = ({
    valueTimeStart911, valueTimeEnd911, dataReport911, sortId, setFilter,resetFilter
})

const $Comment = (props) => {
    const [value, setValue] = useState('')
    const [active, setActive] = useState(false)

    function handler(e) {
        setValue(e.target.value);
    }

    const clickHandler = () => {
        if(value === ''){
            setActive(true)
            // alert('не выбран отчет')
            return null
        }
        props.dataReport911({
            start: props.timeStart911,
            end: props.timeEnd911,
            priznak: value
        })
    }
    const filterHandler = () => {
        if(input.current.value.length < 3){
            props.resetFilter()
        } else {
            props.setFilter(input.current.value, ['Apteka','phone','zakaz'])
        }
    }
    const clear = () =>{
        props.resetFilter()
        input.current.value=''
    }
    const input = useRef(null)
    return (
        <div>
            {props.isLoader === true ? <Loader/> : null}
            <Modal
                active={active}
                setActive={setActive}
            />
            <div className='menu'>
                <div className='content fix'>
                    <div className="contCol textcont">
                        <h4 className="content">Выберите период и отчет</h4>
                        <div className='content'>
                            <FormControl
                                className="commentsDate"
                                type='date'
                                onChange={(e) =>
                                    props.valueTimeStart911(e.target.value)}
                            />
                            <FormControl
                                className="commentsDate"
                                type='date'
                                onChange={(e) =>
                                    props.valueTimeEnd911(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='MenuChekBoxButton'>
                        <div className='content'>
                            <p className="chekBoxText a911">911</p>
                            <Form.Check type="radio" name="chebox" value='1'
                                        checked={value === '1' ? true : false}
                                        className="chekBox" aria-label="option 1"
                                        onChange={handler}/>
                        </div>
                        <div className='content'>
                            <p className="chekBoxText optima">оптима</p>
                            <Form.Check type="radio" name="chebox" value='11'
                                        checked={value === '11' ? true : false}
                                        className="chekBox" aria-label="option 1"
                                        onChange={handler}/>
                        </div>
                        <div className='content'>
                            <p className="chekBoxText">таблетки</p>
                            <Form.Check type="radio" name="chebox" value='13'
                                        checked={value === '13' ? true : false}
                                        className="chekBox" aria-label="option 1"
                                        onChange={handler}/>
                        </div>
                        <Button
                            className="chekBoxButton"
                            variant="secondary"
                            onClick={(e) => clickHandler(e)}
                        >Показать очет</Button>

                    </div>
                        <div className='inputBut'>
                            <FormControl placeholder="аптека/заказ/телефон"
                            onChange={filterHandler} ref={input} className="searchInput"
                            />
                            <Button className='m-1' variant="outline-secondary"
                            onClick={clear}
                            >X</Button>
                        </div>
                </div>
                <TableReport/>
                <TableContent report911={props.report911Filtered}
                              sort={props.sortId}
                />
            </div>
        </div>
    );
};

const Comment = connect(mapStateToProps, mapDispatchToProps)($Comment)

export default Comment;