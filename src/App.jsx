import { useState, useEffect } from "react"

function App() {

  // Crie duas const para guardar e carregar tarefas...
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)
  // useEffect com fetch (requisições assíncronas)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados); // Salva os dados vindos da API no estado.
        setCarregando(false) // Desativa a mensagem carregando.
      });
  }, []); // Array vazio para executar apenas UMA vez ao abrir a tela

  return (
    <>

      <div>
        <div>
          <h2 className="text-black fs-1 mb-3">Tarefas vindas da API</h2>
          <p className="mb-3"><strong>Consumindo dados de JSONPlaceholder via fetch e useEffect</strong></p>
          {carregando ? (
            <div>Carregando...</div>
          ):(
            <ul>
              {tarefas.map((item)=> (
                <li key={item.id} className="text-start">{item.title}
                  {item.completed ? 'Concluído' : 'Pendente'}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    
    </>
  )
}

export default App
