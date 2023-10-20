import React from 'react';

import { useState } from 'react';

import { AiTwotoneDelete } from 'react-icons/ai';

import { AiTwotoneEdit } from 'react-icons/ai';

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from 'react-hook-form';

import { DndProvider } from 'react-dnd';

import { HTML5Backend } from 'react-dnd-html5-backend';

 

// Define a schema for validation using Yup

const schema = yup.object().shape({

  text: yup.string().required(),

});

 

function DraggableTodoItem({ item, onEdit, onDelete, index, moveItem }) {

  const ref = React.useRef(null);

 

  return (

    <div

      ref={ref}

      style={{

        backgroundColor: 'lightblue',

        margin: '20px 25%',

        textAlign: 'center',

        fontSize: '40px',

      }}

      draggable

      onDragStart={(e) => {

        e.dataTransfer.setDragImage(new Image(), 0, 0); // Prevents the default drag preview

        moveItem(index);

      }}

      onDragEnd={() => moveItem(null)}

    >

      <li>

        {item.list}

        <span>

        onEdit(item.id)} title="Edit" id="edit" />

onDelete(item.id)} title="Delete" />

        </span>

      </li>

    </div>

  );

}

 

function DropArea({ items, drop, canDrop }) {

  const dropRef = React.useRef(null);

 

  React.useEffect(() => {

    if (dropRef.current) {

      dropRef.current.addEventListener('dragover', (e) => {

        e.preventDefault();

      });

      dropRef.current.addEventListener('drop', drop);

    }

  }, [drop]);

 

  return (

    <div

      ref={dropRef}

      style={{

        border: '2px dashed #ccc',

        padding: '10px',

        margin: '20px 25%',

      }}

    >

      <h2>Drop Area</h2>

      <ul>

        {items.map((item, index) => (item.id}

            <li>{item.list}</li>

          </div>

        ))}

      </ul>

    </div>

  );

}

 

function App() {

  const [todo, setTodo] = useState(''); // State for managing the input field

  const [todos, setTodos] = useState([]); // State for managing the list of to-dos

  const [editId, setEditId] = useState(0); // State for managing editing mode

  const { handleSubmit } = useForm({ resolver: yupResolver(schema) });

 

  const [draggedIndex, setDraggedIndex] = useState(null);

 

  const moveItem = (toIndex) => {

    const reorderedItems = [...todos];

    const [movedItem] = reorderedItems.splice(draggedIndex, 1);

    reorderedItems.splice(toIndex, 0, movedItem);

    setTodos(reorderedItems);

    setDraggedIndex(toIndex);

  };

 

  const drop = (e) => {

    e.preventDefault();

    // Handle drop here if needed

  };

 

  const addTodo = () => {

    if (todo !== '') {

      setTodos([...todos, { list: todo, id: Date.now() }]);

      setTodo('');

    }

    if (editId) {

const edited = todos.find((item) => item.id === editId);

      const updateTodo = todos.map((to) =>

to.id === edited.id

? { id: to.id, list: todo }

          : to

      );

      setTodos(updateTodo);

      setEditId(0);

      setTodo('');

    }

  };

 

  const onDelete = (id) => {

setTodos(todos.filter((item) => item.id !== id));

  };

 

  const onEdit = (id) => {

const edited = todos.find((item) => item.id === id);

    setTodo(edited.list);

setEditId(edited.id);

  };

 

  return (

    <DndProvider backend={HTML5Backend}>

      <div>

        <h1>TODO APP</h1>

        <form onSubmit={handleSubmit((data) => setTodos(data))}>

          <input

            type="text"

            value={todo}

            placeholder="Enter a task"

            onChange={(e) => setTodo(e.target.value)}

          />

          <button onClick={addTodo}>{editId ? 'Edit' : 'Add'}</button>

        </form>

        <DropArea items={todos} drop={drop} />

        <ul>

          {todos.map((item, index) => (

            <DraggableTodoItem

key={item.id}

              item={item}

              onEdit={onEdit}

              onDelete={onDelete}

              index={index}

              moveItem={moveItem}

            />

          ))}

        </ul>

      </div>

    </DndProvider>

  );

}

 

export default App;