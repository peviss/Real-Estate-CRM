import React from 'react'

const Contact = ({title}) => {
  return (
    <div className="details-contact">
      <h2>Contact</h2>
      <p>Name</p>
      <input type="email" name="" id="" />
      <p>Email</p>
      <input type="text" name="" id="" />
      <p>Message</p>
      <textarea>{`i'm interested in ${title}`}</textarea>
      <button>Send</button>
    </div>
  )
}

export default Contact
