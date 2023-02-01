import React, {useState} from 'react'

export default function ToDoList() {
    const [ToDoList, setToDoList] = useState([]);
    const [SearchFieldValue, setSearchFieldValue] = useState('');
    
    const AddItems = () => {
      // console.log(SearchFieldValue);
      let temp = ToDoList;
      temp.push(SearchFieldValue);

      setToDoList(temp);
      setSearchFieldValue('');

      localStorage.setItem('list' , temp);
      let list = localStorage.getItem('list');
      // setToDoList(list);

}
      function ArrayItemsPrint() {
  // const reptiles = ["alligator", "snake", "lizard"];
  return ToDoList.map((lvalue) => <li key= {lvalue}>{lvalue}</li>);
}


    const handleOnChange = (event) => {
      setSearchFieldValue(event.target.value);
    }
  return (
    <>
    <h1>TODOLIST</h1> 
    <div className="container"> 
    <input className='txtarea' type="text" value={SearchFieldValue} onChange={handleOnChange} placeholder="Search here"/>
    <button className='btn' onClick={AddItems}>Add</button>
    </div>

    <div className="scontainer">
        <p>
        {ArrayItemsPrint() }
        </p> 
    </div>
    
    </>
  )
}
