class Hello extends React.Component {
  render() {
    console.log(this.props);
    let props = this.props;
    return (
      <div>
        <h1>
          Hello {props.name1} from {props.name2}
        </h1>
      </div>
    );
  }
}
