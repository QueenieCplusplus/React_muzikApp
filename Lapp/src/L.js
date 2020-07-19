// 2020, 7/18, noon
// Router

import React from 'react';
import {BrowserRouter as Router,Link, Switch, Route} from 'react-router-dom';

export default function L(){


    return(

        <Router>
            <div>
                <ul>
                    <li>

                        <Link to ="/"> Music Blog </Link> 

                    </li>
                    <li>

                        <Link to ="/songs"> Enjoy</Link>

                    </li>
                    <li>

                        <Link to= "/bye"> Contact Me</Link>

                    </li>

                </ul>
    
                <Switch>
                    <Route path="/songs">
                        <DT/>
                    </Route>
                    <Route path="/bye">
                        <Bye/>
                    </Route>
                    <Route path="/">
                        <MuzBlog/>
                    </Route>
                </Switch>

            </div>

        </Router>

    );

}

function MuzBlog(){
    return <h1> This is Kates Muzik Blog </h1>
}

function DT(){
    return (
             <div>

                    <p>Bad Habit</p>
                    <iframe scrolling="yes" frameborder="1" title="usFrame" aria-hidden="true" width="658" height="370" src="https://www.youtube.com/embed/YSrP6cF1gf8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>
                 
                    <br/>

                    <p> Oh My God </p>
                    <iframe scrolling="yes" frameborder="1" title="usFrame" aria-hidden="true" width="658" height="370" src="https://www.youtube.com/embed/vy7LkrlJzmM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>

                    <p> Chercher </p>
                    <iframe scrolling="yes" frameborder="1" title="usFrame" aria-hidden="true" width="658" height="370" src="https://www.youtube.com/embed/kQysGibXphE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>


                    <p>oh my god will not show</p>

                    <iframe scrolling="yes" frameborder="1" title="usFrame" aria-hidden="true" className="ohmygod" width="420" height="315"
                        src="https://www.youtube.com/watch?v=vy7LkrlJzmM&fbclid=IwAR1G9VF4xfbNH4dlmDXecKL-EhOZA2qOUviOziRf69E4VeDcWcPmbkNX-ik">
                    </iframe>

                    
                
             </div>);
}

function Bye(){
    return <h5>call me on 0933-XXX-OOO.</h5>
}

