import React from 'react'
import ExerciseCard from './ExerciseCard'
import SectionWrapper from './SectionWrapper'

export default function Workout(props) {
  const { workout } = props // Destructure workout from props
  return (
    // Wrap the workout section with a header and title
    <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => { // Iterate over the workout exercises
          return (
            // Render an ExerciseCard for each exercise
            <ExerciseCard i={i} exercise={exercise} key={i} />
          )
        })}
      </div>
    </SectionWrapper>
  )
}
