import React from 'react'

export default  ({ title, body }) => {
    return (
        <li>
            <div className="list__item item">
                <strong className="item__title">{title}</strong>
                <p className="item__body" dangerouslySetInnerHTML={{__html: body}} />
            </div>
        </li>
    )
}
