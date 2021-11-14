
import { create, all } from 'mathjs'
import './App.css';

const config = {}
const math = create(all, config)

function App() {
  console.log(math.evaluate('12 / (2.3 + 0.7)')) // 4
  console.log(math.evaluate('12 / 2 * 3')) // 18
  console.log(math.evaluate('1 + 2 * 3')) // 7
  console.log(math.evaluate('(1 + 2) * 3')) // 9
  return (
    <h1>Calculator</h1>
  );
}

export default App;
