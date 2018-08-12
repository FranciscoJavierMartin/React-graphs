import React from 'react';
import './graph.css';

const Line=({left})=>(
    <div 
        className="line"
        style={{left: `${left}%`}}/>
)

const BarTextContext=({currencies})=>(
    <div className="bar-text-content">
        {
            currencies.map((currency,i)=>(
                <div key={i} className="text">
                    {currency.currencyName}
                </div>
            ))
        }
    </div>
);

const Bar=({percent})=>(
    <div className="bar" style={{width: `${percent}%`}}/>
);


const Markers=()=>{
    const markerArr=Array(11).fill(null);

    return (
        <div className="markers">
            {
                markerArr.map((el,i)=>(
                    <span key={i} className="marker" style={{left:`${i*10}%`}}>
                    {i*10}
                    </span>
                ))
            }
        </div>
    )
}


class Graph extends React.Component{

    constructor(props){
        super(props);

        this.state={

        }
    }

    renderLines(){
        return Array(10).fill(null).map((el,i)=>(
            <Line
                left={i*10}
                key={i}/>
        ));
    }

    renderBars(){
        const {currencies}=this.props;

        let sumOfAllCurrencies=currencies.reduce((acc,currency)=>{
            return acc+currency.marketCap;
        },0);

        return currencies.map((currency)=>{
            const percent=(currency.marketCap/sumOfAllCurrencies)*100;

            return(
                <Bar
                    percent={percent}
                    key={currency.currencyName}/>
            )
        })
    }

    render(){
        return(
            <div className="graph-wrapper">
                <h2>{this.props.graphTitle}</h2>
                <div className="graph">
                    <BarTextContext currencies={this.props.currencies}/>
                    <div className="bar-lines-container">
                        {this.renderLines()}
                        {this.renderBars()}
                        <Markers/>
                    </div>
                    <div style={{width:'12%'}}>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Graph;