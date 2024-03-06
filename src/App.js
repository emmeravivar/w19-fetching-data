import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import getImage from './assets/get.png';
import postImage from './assets/post.png';
import deleteImage from './assets/delete.png';
import putImage from './assets/put.png';

function App() {
  const [data, setData] = useState(null);
  const url = 'https://jsonplaceholder.typicode.com/posts/';
  const dataPost = {
    title: 'foo',
    body: 'bar',
  };

  const id = 2;
  const endpoint = `${url}${id}`;

  // Método GET
  // useEffect(() => {
  //   axios
  //     .get(url) //<= Devuelve una promesa
  //     .then(res => res.data)
  //     .then(data => setData(data)) // <= Esperar a que se resuelva la promesa
  //     .catch(error => console.log(error));
  // }, []);

  // console.log('Leyendo la salida del método GET', data);

  // Método POST
  // useEffect(() => {
  //   axios
  //     .post(url, dataPost)
  //     .then(res => res.data)
  //     .then(data => setData(data))
  //     .catch(error => console.log(error));
  // }, []);

  // console.log('Leyendo la salida del método POST', data);

  // Método DELETE
  // useEffect(() => {
  //   axios
  //     .delete(endpointDelete)
  //     .then(res => res.data)
  //     .then(data => setData(data))
  //     .catch(error => console.log(error));
  // }, []);

  // console.log('Leyendo la salida del método DELETE', data);

  // Método PUT
  useEffect(() => {
    axios
      .put(endpoint, dataPost)
      .then(res => res.data)
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  console.log('Leyendo la salida del método PUT', data);

  return (
    <div className="container">
      <h2>Week 19</h2>
      <h1>Fetchind Data | CRUD</h1>
      <div className="example-container">
        <h2>{url} </h2>
        <div className="box">
          <div className="card">
            <h3 className="card-title">Method: GET</h3>
            <img src={getImage} />
          </div>
          <div className="card">
            <h3 className="card-title">Method: POST</h3>
            <img className="card-body" src={postImage} />
          </div>
          <div className="card">
            <h3 className="card-title">Method: DELETE</h3>
            <img src={deleteImage} />
          </div>
          <div className="card">
            <h3 className="card-title">Method: PUT</h3>
            <img src={putImage} />
          </div>
        </div>
      </div>
      <h3>Eva María Mera Vivar</h3>
      <h4>Learning Facilitator | 01/2024| Emeritus | MiT</h4>
    </div>
  );
}

export default App;
