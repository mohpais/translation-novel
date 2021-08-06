import React from 'react'
import useAuth from 'helpers/Context';
import Banner from 'app/includes/Banner';

function Home() {
    const {user} = useAuth()
    console.log(user);
    return (
        <div>
            {/* <Banner /> */}
        </div>
    )
}

export default Home
