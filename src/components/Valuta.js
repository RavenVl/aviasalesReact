import React from 'react';

class Valuta extends React.Component {
    state = {
        valuta: 'RUB'
    };
    handleClick = (e)=>{
        //console.dir(e.currentTarget.innerText);
        this.setState({
            valuta: e.currentTarget.innerText
        });
    };
    render() {
        return (
            <div className="valuta">
                <span>ВАЛЮТА</span>
                <div className="valuta-select">
                    <div className={`valuta-select-elem ${this.state.valuta ==='RUB'? 'valuta-active' : ''}`} onClick={this.handleClick}>RUB</div>
                    <div className={`valuta-select-elem ${this.state.valuta ==='USD'? 'valuta-active' : ''}`} onClick={this.handleClick}>USD</div>
                    <div className={`valuta-select-elem ${this.state.valuta ==='EUR'? 'valuta-active' : ''}`} onClick={this.handleClick}>EUR</div>
                </div>
            </div>
        )
    }
}

export default Valuta;

