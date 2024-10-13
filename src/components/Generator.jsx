import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/healthy'
import Button from './Button'

// Header component to display section titles and descriptions
function Header(props) {
  const { index, title, description } = props // Destructure props for easier access
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p> {/* Display index number */}
        <h4 className='text-xlg sm:text-2xl md:text-3xl'>{title}</h4> {/* Display title */}
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p> {/* Display description */}
    </div>
  )
}

// Main Generator component
export default function Generator(props) {
  const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props // Destructure props for easier access

  // State variable to manage the visibility of the muscle selection modal
  const [showModal, setShowModal] = useState(false)

  // Function to toggle the visibility of the modal
  function toggleModal() {
    setShowModal(!showModal) // Toggle the value of showModal
  }

  // Function to update the selected muscle groups
  function updateMuscles(muscleGroup) {
    // If the muscle group is already selected, remove it from the array
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    // Limit selection to 2 muscle groups
    if (muscles.length > 2) {
      return
    }

    // If poison type is not 'individual', reset the muscles and close the modal
    if (poison !== 'individual') {
      setMuscles([muscleGroup]) // Set selected muscle group
      setShowModal(false) // Close modal
      return
    }

    // Add muscle group to the selection if under limit
    setMuscles([...muscles, muscleGroup])

    // Close modal if 2 muscle groups are selected
    if (muscles.length === 2) {
      setShowModal(false)
    }
  }

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      {/* Header for workout selection */}
      <Header index={'01'} title={'Pick your poison'}
        description={"Select your workout that you wish to endure."} />

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {/* Button to select workout types */}
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscles([]) // Reset selected muscles
              setPoison(type) // Set the selected workout type
            }} className={'bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? 'border-blue-600' : 'border-blue-400')} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>

      {/* Header for muscle selection */}
      <Header index={'02'} title={'Lock on targets'}
        description={"Select the muscles judged for annihilation."} />

      <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
        {/* Button to toggle muscle selection modal */}
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
          <p className='capitalize'>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(', ')}</p> {/* Display selected muscle groups */}
          <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down'></i> {/* Dropdown icon */}
        </button>

        {/* Render modal with muscle options if visible */}
        {showModal && (
          <div className='flex flex-col px-3 pb-3'>
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button onClick={() => {
                  updateMuscles(muscleGroup) // Update selected muscle group
                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                  <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Header for goal selection */}
      <Header index={'03'} title={'Become Juggernaut'}
        description={"Select your ultimate objective."} />

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {/* Button to select workout goals */}
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoal(scheme) // Set selected goal
            }} className={'bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (scheme === goal ? 'border-blue-600' : 'border-blue-400')} key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>

      {/* Button to finalize workout selection */}
      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  )
}
