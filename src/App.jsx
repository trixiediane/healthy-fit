import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {
  // State variables to manage workout, poison type, selected muscles, and goal
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual') // Default workout type
  const [muscles, setMuscles] = useState([]) // Selected muscle groups
  const [goal, setGoal] = useState('strength_power') // Default goal

  // Function to update the workout based on selected parameters
  function updateWorkout() {
    if (muscles.length < 1) { // Ensure at least one muscle group is selected
      return
    }

    let newWorkout = generateWorkout({ poison, muscles, goal }) // Generate workout
    setWorkout(newWorkout) // Update state with new workout

    window.location.href = '#workout' // Navigate to workout section
  }

  return (
    // Main application layout
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero /> {/* Display the hero section */}
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout} // Pass function to update workout
      />
      {workout && (<Workout workout={workout} />)} {/* Render workout if it exists */}
    </main>
  )
}

export default App
