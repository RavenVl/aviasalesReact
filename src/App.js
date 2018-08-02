import React, {Component} from 'react';
import logo from './img/Logo@2x.png';
import './App.css';
import Valuta from './components/Valuta';
import data from './data/data';
import Tickets from './components/Tickets';
import StopFilter from './components/StopFilter';

class App extends Component {
    state = {
        tickets: data.tickets,
        checkStatus: {
            checkAll: true,
            checkNone: false,
            check1: false,
            check2: false,
            check3: false
        }
    };
    handleSetFilter = (e) => {
        let curCheck = e.currentTarget;

        this.setState((prevState) => {
            if (curCheck.name === 'checkAll' && curCheck.checked) {
                return {
                    checkStatus: {
                        checkAll: true,
                        checkNone: false,
                        check1: false,
                        check2: false,
                        check3: false
                    }
                }
            }
            return {
                checkStatus: {
                    ...prevState.checkStatus,
                    [curCheck.name]: curCheck.checked,
                    checkAll: false
                }
            }

        });
    };
    filterTickets = () => {
        if (this.state.checkStatus.checkAll) {
            return this.state.tickets.sort((a,b)=>a.price-b.price);
        }
        let rezTickets = [];
        if (this.state.checkStatus.checkNone) {
            rezTickets = rezTickets.concat(this.state.tickets.filter(ticket => ticket.stops === 0))
        }
        if (this.state.checkStatus.check1) {
            rezTickets = rezTickets.concat(this.state.tickets.filter(ticket => ticket.stops === 1))
        }
        if (this.state.checkStatus.check2) {
            rezTickets = rezTickets.concat(this.state.tickets.filter(ticket => ticket.stops === 2))
        }
        if (this.state.checkStatus.check3) {
            rezTickets = rezTickets.concat(this.state.tickets.filter(ticket => ticket.stops === 3))
        }
        return rezTickets.sort((a,b)=>a.price-b.price);

    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div className="container">
                    <div className="left-column">
                        <Valuta/>
                        <StopFilter setFilter={this.handleSetFilter} check={this.state.checkStatus}/>

                    </div>

                    <div className="right-column">
                        <Tickets data={this.filterTickets()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
