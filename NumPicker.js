// My mood
// const myMood = () => {
//   const moods = ['angry', 'happy', 'sad', 'desperate'];
//   return moods[Math.floor(Math.random() * moods.length)];
// };
// class JSXDemo extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>My mood is: {myMood()}</h1>
//       </div>
//     );
//   }
// }

//Lucky 7
const getNum = () => {
  return Math.floor(Math.random() * 10 + 1);
};
class NumPicker extends React.Component {
  render() {
    let number = getNum();
    let msg;
    if (number === 7) {
      msg = (
        <div>
          <h1>YOU WIN!!</h1>
          <img src='https://media1.giphy.com/media/3o7TKPXoWOJO1Oa3Go/giphy.gif' />
        </div>
      );
    } else {
      msg = <p>Sorry, you are a loser but definitely try again.</p>;
    }
    return (
      <h1>
        Your Number is: {number}, {msg}
      </h1>
    );
  }
}
