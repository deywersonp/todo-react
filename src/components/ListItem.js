import React from 'react';
import Card from './Card'

function DoneImg(props) {

  if (props.done) {
    return (
      <img className="done" src="./assets/check2.svg" alt="doneTask" />
    )
  } else {
    return (
      <img className="undone" src="./assets/check2.svg" alt="undoneTask" />
    )
  }
}

function ListItem(props) {

  return (
    <li >
      <Card className={props.item.done ? "taskDone item" : "item"}>
        {props.item.text}
        <div>
          <button className="btn" onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
          <button className="btn" onClick={() => { props.onItemDeleted(props.item) }}><img className="delete" src="./assets/delete2.svg" alt="delete" /></button>
        </div>
      </Card>
    </li >)
}


export default ListItem;