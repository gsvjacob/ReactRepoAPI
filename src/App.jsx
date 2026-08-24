import { useState, useEffect } from "react"

function App() {

  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados)
        setCarregando(false)
      })
  }, [])

  return (
    <div className="bg-light min-vh-100 py-5">

      <div className="container">

        <div className="card shadow-sm border-0">

          <div className="card-body p-4">

            <h2 className="text-dark mb-2">
              Tarefas vindas da API
            </h2>

            <p className="text-secondary mb-4">
              Consumindo dados de JSONPlaceholder via fetch e useEffect
            </p>

            {carregando ? (
              <div className="text-center py-4">
                <div
                  className="spinner-border text-primary"
                  role="status"
                >
                  <span className="visually-hidden">
                    Carregando...
                  </span>
                </div>

                <p className="text-secondary mt-2">
                  Carregando tarefas...
                </p>
              </div>
            ) : (
              <ul className="list-group">

                {tarefas.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >

                    <span>
                      {item.title}
                    </span>

                    <span
                      className={`badge ${
                        item.completed
                          ? "text-bg-success"
                          : "text-bg-warning"
                      }`}
                    >
                      {item.completed ? "Concluído" : "Pendente"}
                    </span>

                  </li>
                ))}

              </ul>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default App