import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddClassRoom = () => {
    const [className, setClassName] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newClassRoom = {
            class_name: className,
            location: location,
        };

        console.log("Sending data:", newClassRoom);

        axios
            .post('/api/v1/classroom', newClassRoom)
            .then((response) => {
                alert('Classroom added successfully');
                navigate('/');
            })
            .catch((error) => {
                if (error.response) {
                    console.error('Backend error:', error.response.data);
                    alert(`Error: ${error.response.data.message || 'Error adding classroom'}`);
                } else {
                    console.error('Request error:', error);
                    alert('Error adding classroom');
                }
            });
    };

    return (
        <div className="container">
            <h2>Add New Classroom</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Class Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        className="form-control"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Add Classroom
                </button>
            </form>
        </div>
    );
};

export default AddClassRoom;