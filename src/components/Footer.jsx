
import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
    const Foot=[
        {title:"About",to:"about"},
        {title:"Careers",to:"careers"},
        {title:"Press And Media",to:"about"},
        {title:"FAQs",to:"faq"},
        {title:"Job Opportunity",to:"job-opp"},
    ]
  return (
    <div className='Footer'>
       
        <footer>
          {Foot.map((e,i)=>(
              <Link key={i} to={e.to} style={{margin:"5px"}}>{e.title}</Link>
          ))}
        </footer>

    </div>
  )
}
