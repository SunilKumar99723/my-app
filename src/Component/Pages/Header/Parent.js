class Parent extends React.Component {
    render() {
        return (
            <Child example="foo" />
        )
    }
}

class Child extends React.Component {
    render() {
        return (
            <h1>{this.props.example}</h1>
        )
    }
}

export default Parent;
