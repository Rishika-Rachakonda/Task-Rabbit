import React from 'react'
import './Image.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Image() {
  return (
    <div className="img-reg">
      <div className='note'>
        <h1>Uplaod Image </h1>
        <h2> Want to save your scribbles ? Upload Now accses Later. </h2>
        <h3>Never Loose Another Creative scribble!!</h3>
      </div>
      <div className='form-img'>
        <Form>
          <input type="file" className='file'></input>
          <Button className='btn' type="submit">
              Submit
            </Button>
        </Form>
          
      </div>
    </div>
  )
}

export default Image