import React from 'react';
import Ticket from './Ticket';
class Tickets extends React.Component{
    render(){
        return (
            <div>Tikets
                {this.props.data.map(ticket=>
                    <Ticket key={ticket.departure_date+ticket.arrival_time} ticket={ticket}/>
                )}

            </div>
        )
    }
}

export default Tickets;