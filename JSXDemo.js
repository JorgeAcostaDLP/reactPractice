const myMood = () => {
  const moods = ['angry', 'happy', 'sad', 'desperate'];
  return moods[Math.floor(Math.random() * moods.length)];
};
class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My mood is: {myMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
