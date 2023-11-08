import './main-page.scss'
import Button from "./components/button/button";
import SubAccount from "./components/subAccounts/subAccount";
import Tabs from "./components/tabs/tabs";
import TickerChart from "./components/ticker-chart/tickerChart";
import Statistics from "./components/statistics/statistics";
import StrategyChart from "./components/strategy-char/strategyChart";

const MainPage = () => {
    return (
        <div className="main">

            <div className="left-side">

                <div className="btn-container">
                    <Button/>
                </div>

                <div className="horizontal-spacer"></div>

                <div className="subAccount-container">
                    <SubAccount/>
                </div>

                <div className="little-horizontal-spacer"></div>

                <div className="btn-container">
                    <Button/>
                </div>

            </div>

            <div className="vertical-spacer"></div>

            <div className="right-side">
                <div className="tabs-container">
                    <Tabs/>
                </div>

                <div className="horizontal-spacer"></div>

                <div className="ticker-name-container">
                    Ticker name
                </div>

                <div className="horizontal-spacer"></div>

                <div className="ticker-chart-container">
                    <TickerChart/>
                </div>

                <div className="timeframe-container">
                    Timeframe
                </div>

                <div className="horizontal-spacer"></div>
                <div className="horizontal-spacer"></div>

                <div className="statistics-container">
                    <Statistics/>
                </div>

                <div className="strategy-chart-container">
                    <StrategyChart/>
                </div>
            </div>

        </div>
    )
}

export default MainPage;
