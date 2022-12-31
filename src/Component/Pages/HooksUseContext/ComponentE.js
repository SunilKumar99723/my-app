import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, PlayContext } from './AppUseContextHook'

export default function ComponentE() {
    // to use "useContext" hook ,component E how to consume two value
    const user = useContext(UserContext)
    const play = useContext(PlayContext)
  return (
    <div>
      <ComponentF/> {/* Taking data from C, And  Component E Passing data to Component F */}
      {user} always play {play}
    </div>
  )
}
