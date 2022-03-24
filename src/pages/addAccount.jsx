import React, {useEffect, useState} from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'
const Dashboard = () => {
    const [state,setState] = useState(0);
    const [name,setName] = useState('JOHN WILLIAMS');
    const [number,setNumber] = useState('');
    const [bank,setBank] = useState('Select Bank/Branch');
    const saveAccount = (e) =>{
        setNumber(e.value);
    }
    return (<>
    <div className='container'>
        {state==0 && (<div className='col-6 col-md-7'>
            <div className='card'>
                <center>
                <div>
                    <h3>Add Account</h3>
                </div>
                </center>
                <div>
                <Dropdown>
                <Dropdown.Toggle variant="primary-success" id="dropdown-basic">
                    {bank}
                </Dropdown.Toggle>

                <Dropdown.Menu> 
                    <Dropdown.Item value="Habib Bank Ltd">Habib Bank Ltd</Dropdown.Item>
                    <Dropdown.Item value="Mezan Bank Ltd">Mezan Bank Ltd</Dropdown.Item>
                    <Dropdown.Item value="Faisal Bank Ltd">Faisal Bank Ltd</Dropdown.Item>
                    <Dropdown.Item value="Easypaisa / Telenor Microfinance Bank" >Easypaisa</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                    <br />
                    <br />
                    <label>Account Number</label>
                    <input type="text" onChange={(e)=>{setNumber(e.target.value);}} value={number} placeholder='Account Number'/><br />
                    <button onClick={()=>{setState(1);setNumber(number)}}>Verify</button>
                </div>
            </div>
        </div>)}
        { state==1 && (<div className='col-5 col-md-8'>
            <div className='card'>
                <div>
                    <label>Beneficiary Detail</label>
                    <p className='alert alert-warning'>{name} <br /> {bank} <br /> {number}</p>
                    <button onClick={()=>{setState(2)}}>Confirm</button>
                </div>
            </div>
            </div>
        )}
        {state==2 && (<div className='col-4 col-md-7'>
            <div className='card'>
                <div>
                <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" /><br />
                    <button onClick={()=>{window.location="http://localhost:3000/beneficiary"}}>Proceed</button>
                </div>
            </div>
        </div>)}
    </div>
    </>)
}

export default Dashboard