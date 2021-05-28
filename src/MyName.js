import { Component, Fragment } from "react";

class MyName extends Component {
    /*
    static defaultProps = {
        name: '기본이름'
    }*/

    render() {
        return (
            <Fragment>
                <div>
                    안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
                <div>
                    안녕하세요! 제 이름2은 <b>{this.props.name2}</b> 입니다.
            </div>
            </Fragment>
        );
    }
}

MyName.defaultProps = {
    name: 'BaseName',
}

export default MyName;