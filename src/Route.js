import React, { Component } from 'react';
import {BrowserRouter as Routers,Switch,Route,Link} from 'react-router-dom';
import { render } from 'react-dom';
import { Router } from 'react-router';

import Api from './Api';

class App extends Component{
    constructor(Props){
        super(Props);
    }
    render(){
       
        return(
            <Routers>
                <div>
                    <ul>
                        
                        <li>
                            <Link to="/Api">Api</Link>
                            
                        </li>
                       
                    </ul>
                </div>
                <Switch>
                    
                    <Route  path="/Api">
                        <Api />
                    </Route>
                    
                </Switch>

            </Routers>
        );
        
    }
}
export default App;