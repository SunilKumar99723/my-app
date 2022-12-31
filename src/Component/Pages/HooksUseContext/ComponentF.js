import React from 'react'
import { UserContext, PlayContext } from './AppUseContextHook'


export default function ComponentF() {
  return (
    <div>
      {/* Issue : This is too much nested code which only use/consume two values.
      solution : There is better way to use "useContext" hook , check in component E how to use it to consume two value*/}
      <UserContext.Consumer>

        {
          user => {
            return (
              <PlayContext.Consumer>
                {play => {
                  return <div> {user} always play {play}</div>
                }}
              </PlayContext.Consumer>

            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}
