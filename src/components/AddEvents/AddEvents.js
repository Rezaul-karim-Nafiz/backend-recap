import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
var cors = require('cors');
cors()
const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleImgUpload = e => {
        
        console.log(e.target.files)
        const imageData = new FormData();
        imageData.set('key', 'df4a268f2b640e1ec4b022d4390f6d6a');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
            imageData
          )
          .then(function (response) {
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }


    console.log(watch("example"));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>               
                <input defaultValue="test" {...register("example")} /><br/>
                <input type="file" onChange={handleImgUpload} /><br/>  
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;