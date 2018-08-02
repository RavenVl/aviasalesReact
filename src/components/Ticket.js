import React from 'react';
import plane from '../img/plane.png';

class Ticket extends React.Component {
    stopsToStr(col){
      if(col===1){
          return '1 пересадка';
      }
      else if(col>1 && col<5){
          return `${col} пересадки`;
        }
        else{
          return `${col} пересадок`
      }
    }
    dataToStr(data){
        return `${data} ${(new Date(data)).toLocaleString('ru', {weekday: 'short'})}`;
    }
    priceToStr(price){
        let strPrice = price.toString();
        let rez = strPrice.slice(0,-3)+' '+strPrice.slice(-3);
        return rez;
    }
    render() {
        return (
            <div className="ticket">
                <div className="ticket__left">
                    <div>{this.props.ticket.carrier}</div>

                    <button className="ticket__button">{'Купить '} <br />
                        {' за  '+this.priceToStr(this.props.ticket.price)}<label>{' ₽'}​</label></button>

                </div>
                <div className="ticket__right">
                    <div className="ticket__right--from">
                        <div className="ticket__time"> {this.props.ticket.departure_time}</div>
                        <div className="ticket__dist"> {this.props.ticket.origin} {this.props.ticket.origin_name}</div>
                        <div className="ticket__dist--under">{this.dataToStr(this.props.ticket.departure_date)} </div>
                    </div>
                    <div className="ticket__right--arrow">
                        <div>{this.stopsToStr(this.props.ticket.stops)}</div>
                        <img src={plane} alt="plane to"/>
                    </div>
                    <div className="ticket__right--to">
                        <div className="ticket__time"> {this.props.ticket.arrival_time}</div>
                        <div className="ticket__dist"> {this.props.ticket.destination} {this.props.ticket.destination_name}</div>
                        <div className="ticket__dist--under">{this.dataToStr(this.props.ticket.arrival_date)}</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Ticket;