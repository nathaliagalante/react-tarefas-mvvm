import useViewModel from "./useViewModel";

export default function View() {

  const {
    setFiltro,
    setTexto,
    adicionarTarefa,
    alternarConclusao,
    removerTarefa,
    tarefasVisiveis,
    tarefasPendentes,
    texto,
    filtro
  } = useViewModel();

  return (
    <main className="container">
      <header className="cabecalho">
        <p className="sobretitulo">PRÁTICA DE REACT</p>
        <h1>Minha lista de tarefas</h1>
        <p className="resumo">
          Você tem {tarefasPendentes} tarefa
          {tarefasPendentes === 1 ? "" : "s"} pendente
          {tarefasPendentes === 1 ? "" : "s"}.
        </p>
      </header>

      <form className="formulario" onSubmit={(event) => {
         event.preventDefault();
         adicionarTarefa()
      }}>
        <label className="rotulo" htmlFor="nova-tarefa">
          Nova tarefa
        </label>
        <div className="linha-formulario">
          <input
            id="nova-tarefa"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
            placeholder="Ex.: estudar React"
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <section className="lista-section" aria-label="Tarefas">
        <div className="lista-cabecalho">
          <h2>Tarefas</h2>
          <label>
            <span className="visualmente-oculto">Filtrar tarefas</span>
            <select
              value={filtro}
              onChange={(event) => setFiltro(event.target.value)}
            >
              <option value="todas">Todas</option>
              <option value="pendentes">Pendentes</option>
              <option value="concluidas">Concluídas</option>
            </select>
          </label>
        </div>

        {tarefasVisiveis.length === 0 ? (
          <p className="vazio">Nenhuma tarefa para exibir.</p>
        ) : (
          <ul className="lista">
            {tarefasVisiveis.map((tarefa) => (
              <li className="tarefa" key={tarefa.id}>
                <label className="tarefa-descricao">
                  <input
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={() => alternarConclusao(tarefa.id)}
                  />
                  <span className={tarefa.concluida ? "concluida" : ""}>
                    {tarefa.descricao}
                  </span>
                </label>
                <button
                  className="botao-remover"
                  type="button"
                  onClick={() => removerTarefa(tarefa.id)}
                  aria-label={`Remover tarefa: ${tarefa.descricao}`}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
