import React from 'react'
import styles from './Input.module.css'

export const Input = React.forwardRef((props, ref) => {  //forwardRef is used to enable using useRef on component
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} /> {/*...props.input ka mtlb props.input.jo bhi properties hai vo yha add ho jayenge */}
        </div>
    )
})
