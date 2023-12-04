import React from 'react'
import LeftSide from '../../components/message/LeftSide'

const Message = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-4 border-right px-0">
                <LeftSide />
            </div>

            <div className="col-md-8 px-0 right_mess">
                <div className="d-flex justify-content-center 
                align-items-center flex-column h-100">

                   <img src="./Sociotalk.png" alt="Logo"  style={{ maxWidth: '250px', maxHeight: '250px' }} /> 
                   
                    <h4>SOCIOTALK</h4>

                </div>
            </div>
        </div>
    )
}

export default Message
