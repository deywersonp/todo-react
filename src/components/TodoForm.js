import React, { useState } from 'react';

function TodoForm(props) {

  const [text, setText] = useState('');

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    // Impede que o formulário seja enviado ao backend
    event.preventDefault();
    // Verifica se o valor do input é diferente de vazio, se não for, Impede
    // a adição de uma tarefa em branco
    if (text) {
      props.onAddItem(text);
      //Atribui o valor text para vazio, logo, quando o INPUT recebe esse valor
      //text ele limpa a entrada dele. 
      setText('');
    }
  }
  return (
    <form>
      {/* Input recebe o valor vazio (para limpar o campo assim que o botão add
      for pressionado)  */}
      <input onChange={handleChange} type="text" value={text} />
      <button onClick={addItem}>Adicionar Tarefa</button>
    </form>
  )
}

export default TodoForm;