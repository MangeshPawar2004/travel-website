import React from 'react'
import {Header} from "../../../components";

const Dashboard = () => {

    const user={
        name: 'Mangesh'
    }
  return (

   <main className="dashboard wrapper">
     <Header
         title={`Welcome ${user?.name ?? 'Guest'} 👋`}
         description="Track activity, trends and popular destinations in real time"
     />
   </main>
  )
}

export default Dashboard
import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard Page</div>
  )
}

export default Dashboard