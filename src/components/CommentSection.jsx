import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div>
      <h2>Comentários</h2>
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Escreve algo ai..."
      />
      <button onClick={handleCommentSubmit}>Enviar</button>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
