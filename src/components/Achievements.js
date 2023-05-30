import React from 'react'

export default function Achievements() {
    return (
        <div>
            <h1 class="h1">My Achievements</h1>

            <div class="achievements">
                <div><h2>Competitive Programming</h2></div>
                <div><h2>Academic Achievements</h2></div>
                <div>
                    <font style={{ color: 'white', textAlign: 'center', fontSize: '17px' }}>
                        <a href="https://www.codechef.com/users/aryansanghi" style={{ color: 'skyblue' }}>CodeChef</a> - Highest Rating: 2239<br />
                        <a href="https://codeforces.com/profile/aryansanghi" style={{ color: 'skyblue' }}>Codeforces</a> - Highest Rating: 1690<br />
                        <font style={{ color: 'black', textDecoration: 'underline' }}>Google CodeJam</font> - 2020 - Qualified Round 1(Rank-1350) and Reached Round 2<br />
                        <font style={{ color: 'black', textDecoration: 'underline' }}>Google KickStart</font> - Best Rank - 624<br />
                        <font style={{ color: 'black', textDecoration: 'underline' }}>Olympiads</font> - Qualified ZCO - 2019 & ZIO - 2019<br />
                    </font>
                </div>
                <div>
                    <font style={{ color: 'white', textAlign: 'center', fontSize: '17px' }}>
                        <font style={{ color: 'black', textDecoration: 'underline' }}>JEE Advanced 2022</font> - AIR: 486<br />
                        <font style={{ color: 'black', textDecoration: 'underline' }}>JEE Mains 2022</font> -  AIR: 550<br />
                        <font style={{ color: 'black', textDecoration: 'underline' }}>Olympiads</font> - Qualified NSEC - 2021&2022, NSEA - 2021&2022, NSEP - 2022, NTSE scholar, KVPY SA scholar<br />
                    </font>
                </div>
            </div>
        </div>
    )
}
