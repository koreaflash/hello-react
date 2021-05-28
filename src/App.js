import './App.css'
import Counter from './Counter';
import MyName from './MyName';
import MyName2 from './MyName2';

const { Component, Fragment } = require("react");

class App extends Component {
  render() {
    const name = 'react';
    const value = 1;
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    }

    return (
      <Fragment>
        <Counter />
        <div>
          <MyName2 name="이승호" />
        </div>
        <div>
          <MyName name="이승호" />
        </div>
        <div>
          <MyName />
        </div>
        <div style={style}>
          hello {name}!
        <input type="text"></input>
        </div>
        <div //주석
        >
          {/* 주석 */}

          {//주석
            1 + 1 === 2 ? <div>맞아요</div> : <div>틀려요</div>
          }
        </div>
        <div>
          {
            1 + 1 === 2 && <div>right</div>
          }
        </div>
        <div className="App">
          {
            function () {
              if (value === 1) return <div>하나</div>;
              if (value === 2) return <div>둘</div>;
              if (value === 3) return <div>셋</div>;
            }()
          }
        </div>
        <div>
          {
            (() => {
              if (value === 1) return <div>하나</div>;
              if (value === 2) return <div>둘</div>;
              if (value === 3) return <div>셋</div>;
            })()
          }
        </div>
      </Fragment>
    )
  }
}

export default App;