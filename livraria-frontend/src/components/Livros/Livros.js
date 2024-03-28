import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Livros = () => {
  const [livros, setLivros] = useState([]);
  const [novoLivro, setNovoLivro] = useState({ titulo: '', autor: '', ano: '' });

  // Função para carregar os livros existentes
  const carregarLivros = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/livros');
      setLivros(response.data);
    } catch (error) {
      console.error('Erro ao carregar os livros:', error);
    }
  };

  // Função para adicionar um novo livro
  const adicionarLivro = async () => {
    try {
      await axios.post('http://localhost:3000/api/livros', novoLivro);
      // Recarrega a lista de livros após adicionar um novo livro
      carregarLivros();
      // Limpa o formulário após adicionar o livro
      setNovoLivro({ titulo: '', autor: '', ano: '' });
    } catch (error) {
      console.error('Erro ao adicionar o livro:', error);
    }
  };

  // Função para atualizar um livro existente
  const atualizarLivro = async (id, livroAtualizado) => {
    try {
      await axios.put(`http://localhost:3000/api/livros/${id}`, livroAtualizado);
      // Recarrega a lista de livros após atualizar o livro
      carregarLivros();
    } catch (error) {
      console.error('Erro ao atualizar o livro:', error);
    }
  };

  // Função para excluir um livro
  const excluirLivro = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/livros/${id}`);
      // Recarrega a lista de livros após excluir o livro
      carregarLivros();
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
    }
  };

  // Efeito para carregar os livros quando o componente é montado
  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <div>
      <h2>Livros</h2>
      {/* Formulário para adicionar um novo livro */}
      <form onSubmit={(e) => {
        e.preventDefault();
        adicionarLivro();
      }}>
        <input type="text" placeholder="Título" value={novoLivro.titulo} onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })} />
        <input type="text" placeholder="Autor" value={novoLivro.autor} onChange={(e) => setNovoLivro({ ...novoLivro, autor: e.target.value })} />
        <input type="text" placeholder="Ano" value={novoLivro.ano} onChange={(e) => setNovoLivro({ ...novoLivro, ano: e.target.value })} />
        <button type="submit">Adicionar Livro</button>
      </form>
      {/* Lista de livros */}
      <ul>
        {livros.map(livro => (
          <li key={livro.id}>
            <div>
              <strong>Título: </strong>{livro.titulo}<br />
              <strong>Autor: </strong>{livro.autor}<br />
              <strong>Ano: </strong>{livro.ano}<br />
            </div>
            {/* Botão para atualizar um livro */}
            <button onClick={() => {
              const titulo = prompt('Novo título:', livro.titulo);
              const autor = prompt('Novo autor:', livro.autor);
              const ano = prompt('Novo ano:', livro.ano);
              if (titulo && autor && ano) {
                atualizarLivro(livro.id, { titulo, autor, ano });
              }
            }}>Atualizar</button>
            {/* Botão para excluir um livro */}
            <button onClick={() => excluirLivro(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Livros;
