import'./GetStarted.css'
import { Component } from 'react'
import {Button} from './Button'

export const GetStarted = () => {
return(
    <div className='body'>
        <h1> Get Premium free for 1 month</h1>
        <p> Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>

        <Button />
        <h6><a href='#Terms'>Terms and conditions apply</a> 1 month free not available for users who have already tried premium</h6>
    </div>
)
}