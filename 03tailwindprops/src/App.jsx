import './App.css'
import Card from './Card'

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind CSS</h1>
      <Card username = "Bhavya" btnText = "Check Profile"></Card>
      <Card username = "Harshit" btnText = "Veiw Profile"></Card>
    </>
  );
}

export default App
