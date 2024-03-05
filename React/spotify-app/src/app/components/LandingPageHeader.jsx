import './LandingPageHeader.css'
import { Component } from 'react'
import {Logo} from './logo'
// import {Component}from 'react'

export const LandingPageHeader = () => {
    return (<header className="header">
        <div className="logo">
          <Logo/>
        </div>
        <div className="menu">
            <ul>
                <li> <a href='#'>Premium</a></li>
                <li> <a href='#'>Support</a></li>
                <li> <a href='#'>Download</a></li>
                <li> <a href='#'>
                    |</a></li>
                    <li className='active'> <a href='#'>Sign up</a></li>
                    <li className='active'> <a href='#'>Login</a></li>
            </ul>
        </div>
    </header>)
}















//using class based component
//  export class LandingPageHeader extends Component{
//     render(){
//         return (<header className="header">LandingPageHeader
//         <div className="logo">Logo</div>
//         <div className="menu">Menu</div>
//     </header>)
//     }
//}
