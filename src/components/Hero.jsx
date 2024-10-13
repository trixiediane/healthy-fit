import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO BE</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>HEALTHY <span className='text-blue-400'>
                    & FIT
                </span>
                </h1>
            </div>
            <p className='text-sm md:text-base font-light'>
                I hereby acknowledge that I am embarking on a quest to be both <span className='text-blue-400 font-medium'>
                    healthy and fit
                </span>.
                I understand this may involve moving more than just to the fridge, eating things that aren’t always pizza, and occasionally choosing a salad (no promises). I also acknowledge that being healthy and fit doesn’t mean perfection, but progress—whether it’s running a mile or just running late. <span className='text-blue-400 font-medium'>
                    In the spirit of balance,
                </span> I fully embrace that cheat days exist, and naps are a vital part of recovery. Let's get healthy, let's get fit, and let’s keep it fun!
            </p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"} />
        </div>
    )
}
