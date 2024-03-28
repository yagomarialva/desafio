import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Importando o estilo

const Home = () => {
  const [livros, setLivros] = useState([]);
  const [novoLivro, setNovoLivro] = useState({ titulo: '', autor: '', ano: '' });
  const [modalAberto, setModalAberto] = useState(false);

  const carregarLivros = async () => {
    try {
      const response = await axios.get('http://localhost:3000/livros', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setLivros(response.data);
    } catch (error) {
      console.error('Erro ao carregar os livros:', error);
    }
  };

  const adicionarLivro = async () => {
    try {
      const response = await axios.post('http://localhost:3000/livros', novoLivro, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      carregarLivros();
      setNovoLivro({ titulo: '', autor: '', ano: '' });
      setModalAberto(false);
    } catch (error) {
      console.error('Erro ao adicionar o livro:', error);
    }
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Biblioteca</h2>
      <button className="add-book-button" onClick={() => setModalAberto(true)}>Adicionar Livro</button>
      {modalAberto && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalAberto(false)}>&times;</span>
            <h2>Novo Livro</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              adicionarLivro();
            }}>
              <input type="text" placeholder="Título" value={novoLivro.titulo} onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })} />
              <input type="text" placeholder="Autor" value={novoLivro.autor} onChange={(e) => setNovoLivro({ ...novoLivro, autor: e.target.value })} />
              <input type="text" placeholder="Ano" value={novoLivro.ano} onChange={(e) => setNovoLivro({ ...novoLivro, ano: e.target.value })} />
              <button type="submit" className="submit-button">Adicionar Livro</button>
            </form>
          </div>
        </div>
      )}
      <table className="book-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {livros.map(livro => (
            <tr key={livro.id}>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
