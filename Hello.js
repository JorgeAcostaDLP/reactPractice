class Hello extends React.Component {
  render() {
    console.log(this.props);
    let props = this.props;
    let bangs = '!'.repeat(props.bangs);
    return (
      <div>
        <h1>
          Hello {props.name1} from {props.name2}
          <ul>
            My hobbies are :
            {props.hobbies.map(hob => (
              <li>{hob}</li>
            ))}
          </ul>
          {bangs}
        </h1>
      </div>
    );
  }
}
