import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import "./AddNew.css";

const AddNew = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/spots', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfullt');
                    reset();
                }
            })
    }

    return (
        <>
            <Header></Header>
            <div className="add-spot">
                <h3>Add new Spot</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />

                    <textarea {...register("description")} placeholder="description" />
                    <input type="number" {...register("cost")} placeholder="price" />
                    <input {...register('img')} placeholder="upload image" />
                    <input type="submit" />
                </form>

            </div>
            <Footer></Footer>
        </>
    );
};

export default AddNew;