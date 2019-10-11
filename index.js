class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name1='Jorge' name2='Luis' />;
        <NumPicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
