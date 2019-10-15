class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          name1='Jorge'
          name2='Luis'
          bangs={4}
          hobbies={['laughing', 'fun']}
        />
        ;
        <Hello
          name1='Jorge'
          name2='Luis'
          bangs={40}
          hobbies={['drinking', 'fugogon']}
        />
        ;
        <NumPicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
