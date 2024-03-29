// BlogForm.js

import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addBlog } from '../../services/blogService';
import { formats, modules } from '../../utils/quillHelpers';

function BlogForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBlog(title, text);
  }

  return (
    <Container className='mt-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBlogTitle">
          <Form.Label>Blog Başlığı</Form.Label>
          <Form.Control
            type="text"
            placeholder="Başlık girin"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBlogText">
          <Form.Label>Blog İçeriği</Form.Label>
          <ReactQuill
            theme="snow"
            value={text}
            onChange={setText}
            modules={modules}
            formats={formats}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Blog Ekle 
        </Button>
      </Form>
      <ToastContainer/>
    </Container>
  );
}

export default BlogForm;