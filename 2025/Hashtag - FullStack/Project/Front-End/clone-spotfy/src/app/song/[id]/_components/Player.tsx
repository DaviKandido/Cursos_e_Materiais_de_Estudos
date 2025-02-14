"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCirclePlay, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Player({duration, randomIdSongArtist, randomId2SongArtist}: any) {
  return (
    <div className='player'>
      <div className='player__controllers'>
        <Link href={`/song/${randomIdSongArtist}`}>
          <FontAwesomeIcon 
            className='player__icon'
            icon={faBackwardStep}
            />
        </Link>

          <FontAwesomeIcon 
            className='player__icon player__icon--play'
            icon={faCirclePlay}
          />

        <Link href={`/song/${randomId2SongArtist}`}>
          <FontAwesomeIcon 
            className='player__icon'
            icon={faForwardStep}
          />
        </Link>
      
      </div>

      <div className='player__progress'>
        <p>00:00</p>

        <div className='player__bar'>
          <div className="player__bar-progress">
          </div>
        </div>
        
        <p>{duration}</p>
      </div>
    </div>
  )
}
