import React from 'react';

class StopFilter extends React.Component {

    handleCheckClick = (e) => {
        this.props.setFilter(e);
    };

    render() {
        return (
            <div className="filter">
                <span>КОЛЛИЧЕСТВО ПЕРЕСАДОК</span>
                <div>
                    <div>
                        <input type="checkbox" name="checkAll" id="checkAll"
                               onChange={this.handleCheckClick}
                               checked={this.props.check.checkAll}
                               className="checkbox"
                        />
                        <label htmlFor="checkAll">Все</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkNone" id="checkNone"
                               onChange={this.handleCheckClick}
                               checked={this.props.check.checkNone}
                               className="checkbox"
                        />
                        <label htmlFor="checkNone">Без пересадок</label>
                    </div>
                    <div>
                        <input type="checkbox" name="check1" id="check1"
                               onChange={this.handleCheckClick}
                               checked={this.props.check.check1}
                               className="checkbox"
                        />
                        <label htmlFor="check1">1 пересадка</label>
                    </div>
                    <div>
                        <input type="checkbox" name="check2" id="check2"
                               onChange={this.handleCheckClick}
                               checked={this.props.check.check2}
                               className="checkbox"
                        />
                        <label htmlFor="check2">2 пересадки</label>
                    </div>
                    <div>
                        <input type="checkbox" name="check3" id="check3"
                               onChange={this.handleCheckClick}
                               checked={this.props.check.check3}
                               className="checkbox"
                        />
                        <label htmlFor="check3">3 пересадки</label>
                    </div>

<div className="tets"></div>
                </div>
            </div>

        )
    }
}

export default StopFilter;