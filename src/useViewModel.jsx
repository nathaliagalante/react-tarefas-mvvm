import { useState } from "react";
import { criarTarefa, alternarConclusao as alternarConclusaoNoModel } from './Model';

export default function ViewModel() {
    const [tarefas, setTarefas] = useState([]);
    const [texto, setTexto] = useState("");
    const [filtro, setFiltro] = useState("todas");
    const [proximoId, setProximoId] = useState(1);

    function adicionarTarefa() {
        const novaTarefa = criarTarefa(proximoId, texto);

        if (!novaTarefa) return  

        setTarefas((tarefasAtuais) => [
        ...tarefasAtuais,
        novaTarefa,
        ]);
        setProximoId(proximoId + 1);
        setTexto("");
    }

  function alternarConclusao(id) {
    setTarefas((tarefasAtuais) => 
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? alternarConclusaoNoModel(tarefa)
          : tarefa
      )
    );
  }

  function removerTarefa(id) {
    setTarefas((tarefasAtuais) => tarefasAtuais.filter((tarefa) => tarefa.id !== id));
  }

  const tarefasVisiveis = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  const tarefasPendentes = tarefas.filter(
    (tarefa) => !tarefa.concluida
  ).length;

  return {
    setFiltro,
    setTexto,
    adicionarTarefa,
    alternarConclusao,
    removerTarefa,
    tarefasVisiveis,
    tarefasPendentes,
    texto,
    filtro
  }
}