import React, { useState, useEffect } from 'react';
import './CommentSection.css';

const CommentSection = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Recupera os comentários do localStorage quando o componente é montado
    const storedComments = JSON.parse(localStorage.getItem('comments'));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      const newComments = [...comments, { name, comment }];
      setComments(newComments);
      localStorage.setItem('comments', JSON.stringify(newComments)); // Armazena os comentários no localStorage
      setName('');
      setComment('');
    }
  };

  return (
    <div className="comment-section">
      <h2>Comentários</h2>
      <form onSubmit={handleCommentSubmit} className="form-container">
        <div className="form-group">
        {/* Caixa do nome */}
          <input
            type="text"
            className="form-control"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Caixa da mensagem */}
          <textarea
            className="form-control"
            placeholder="Escreve algo ai..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div>
        {comments.map((c, index) => (
          <div key={index} className="comment">
            <p><strong>{c.name}</strong></p>
            <p>{c.comment}</p>
          </div>
        ))}      
      </div>
    </div>
  );
};

export default CommentSection;
