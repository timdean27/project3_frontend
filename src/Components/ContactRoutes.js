import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import ShowContact from '../Pages/Contact/ShowContact';


const ContactRoutes = () => {
    const [ContactData, setContactData] = useState([])
    const urlContact = 'http://localhost:4321/home/contact'

    async function getContactData() {
        await fetch(urlContact).then((res) => res.json())
          .then((data) => {
            console.log('Contact data insisde fetch funciton', data)
      
            setContactData(data)
          }).catch(console.error);
        }

        useEffect(() => {
            getContactData()

            }, []);

            if(!ContactData) {
                return( 
                  <div>
                    <h2>Loading</h2>
                  </div>
                )
              }

  return (
    <div>
    <ShowContact ContactData ={ContactData}/>
    </div>
  )
}

export default ContactRoutes