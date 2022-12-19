import React from 'react';
import { SiAirbnb} from 'react-icons/si';
import {FaUserCircle} from 'react-icons/fa'
import {FiMenu} from "react-icons/fi"
import { SearchModalOpener } from './SearchModalOpener';
import { Button } from '../atoms/buttons/Button';

export const Header = () => {
  return (
    <header>
        <div className='p-5 shadow-md rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='cursor-pointer'>
                    <SiAirbnb color={"#FF385C"} size={"2rem"}/>
                </div>
                <div>
                <SearchModalOpener/>
                </div>
                <div>
                  <Button buttonType="whiteRounded" mediaQueries='p-3'>
                    <FiMenu color={"#717171"} size={"1.5rem"}/>
                    <FaUserCircle color={"#717171"} size={"2rem"}/>
                  </Button>
                </div>
            </div>
        </div>
        <div>

        </div>
    </header>
  )
}
