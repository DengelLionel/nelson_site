import React from 'react'

const ItemBuscadorTwo = ({ open }, props) => {
    return (
        <svg
            onClick={open}
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={19}
            fill="none"
            {...props}>
            <path
                fill="#EEEFF3"
                d="M14.294 11.95h-.904l-.32-.294c1.121-1.238 1.796-2.846 1.796-4.595 0-3.9-3.328-7.061-7.433-7.061S0 3.161 0 7.061s3.328 7.061 7.433 7.061a7.632 7.632 0 0 0 4.837-1.705l.309.304v.858L18.296 19 20 17.381l-5.706-5.431Zm-6.861 0c-2.848 0-5.146-2.184-5.146-4.889s2.298-4.888 5.146-4.888c2.847 0 5.146 2.183 5.146 4.888S10.28 11.95 7.433 11.95Z"
            />
        </svg>
    )
}

export default ItemBuscadorTwo
