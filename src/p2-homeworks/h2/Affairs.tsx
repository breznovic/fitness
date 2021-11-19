import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import c from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const cnAll = c.button + '' + (props.filter === 'all' ? c.active : '')
    const cnHigh = c.button + '' + (props.filter === 'high' ? c.active : '')
    const cnMiddle = c.button + '' + (props.filter === 'middle' ? c.active : '')
    const cnLow = c.button + '' + (props.filter === 'low' ? c.active : '')
    const setClass = (filter: FilterType) => {
        return c.button + (props.filter === filter ? '' + c.active : '')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={cnAll}>All</button>
            <button onClick={setHigh} className={cnHigh}>High</button>
            <button onClick={setMiddle} className={cnMiddle}>Middle</button>
            <button onClick={setLow} className={cnLow}>Low</button>
        </div>
    )
}

export default Affairs
