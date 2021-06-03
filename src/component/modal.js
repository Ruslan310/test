import React  from "react";
import '../style/modal.css'

const Modal = (props) =>{

  return(
        <div className={props.active ? 'services active' : 'services'}
             onClick={() =>props.setActive(false)}>
            <div className={props.active ? 'services_content active' : 'services_content'}
                 onClick={e => e.stopPropagation()}>
                <div className='services_text'>
                    <h5>Выберите тип дату  и отчета </h5>
                </div>
            </div>
        </div>
    )
}

export default Modal