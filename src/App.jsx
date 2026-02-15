import './App.css'

const ROYGBIV = ['#e53935', '#ff9800', '#43a047', '#1e88e5', '#3949ab', '#8e24aa'] // Red, Orange, Green, Blue, Indigo, Violet

function App() {
  const tagline = "This is the coolest site ever!!!!"
  return (
    <div className="app">
      <h1 className="tagline">
        {tagline.split('').map((char, i) => (
          <span key={i} style={{ color: ROYGBIV[i % 6] }}>{char}</span>
        ))}
      </h1>
      <div className="image-wrapper">
        <img
          src="/smile.png"
          alt="Smile"
          className="centered-image"
        />
      </div>
    </div>
  )
}

export default App
