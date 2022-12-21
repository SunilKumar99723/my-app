import React from 'react';

function ParentAsFunction(){
    const data = 'Data from parent to child by using function';
    return(
        <div>
            <Child dataParentToChild = {data}/>
        </div>
    )
}

function Child ({dataParentToChild}){
    return(
        <div>
            {dataParentToChild}
        </div>
    )
}

export default ParentAsFunction;