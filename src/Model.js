export function criarTarefa(id, texto) {
    const descricao = texto.trim();

    if (!descricao) return;

    return {
        id,
        descricao,
        concluida: false
    }
}

export function alternarConclusao(tarefa) {
    return  { 
        ...tarefa, 
        concluida: !tarefa.concluida 
    }
}