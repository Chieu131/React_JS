import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateClassRoom = () => {
    const { id } = useParams();
    const [class_name, setClass_name] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClassRoom = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/classroom/${id}`);
                const classroom = response.data;
                setClass_name(classroom.class_name);
                setLocation(classroom.location);

            } catch (error) {
                console.error('Error fetching:', error);
            }
        };

        fetchClassRoom();
    }, [id]);

    const goBackToProductList = () => {
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateClassRoom = { class_name, location };

        try {
            await axios.put(`/api/v1/classroom/update/${id}`, updateClassRoom);
            alert('Successfully!');
            setClass_name('');
            setLocation('');

        } catch (error) {
            console.error('Error updating:', error);
            alert('Error!');
        }
    };

    return (
        <div className="container">
            <h2 className=" mb-4">Update ClassRoom</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ClassRoom"
                        value={class_name}
                        onChange={(e) => setClass_name(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="location "
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>

                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Cập nhật sản phẩm

                    </button>
                    ||
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={goBackToProductList}
                    >
                        Quay lại
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateClassRoom;