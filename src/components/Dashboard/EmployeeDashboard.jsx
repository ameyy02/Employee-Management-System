import React from 'react'
import Header from '../others/Header'
import Tasklistnum from '../others/Tasklistnum'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({ changeuser, data }) => {
    return (
        <div className="p-7">

            <Header
                changeuser={changeuser}
                data={data}
            />

            <Tasklistnum data={data} />

            <Tasklist data={data} />

        </div>
    )
}

export default EmployeeDashboard