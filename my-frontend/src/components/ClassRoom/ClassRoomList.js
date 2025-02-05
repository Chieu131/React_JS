
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClassRoomList = () => {
    const [classrooms, setClassrooms] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchClassrooms = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/v1/classroom');
            setClassrooms(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClassrooms();
    }, []);


    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/v1/classroom/delete/${id}`);
            alert('Deleted successfully!');

            fetchClassrooms();
        } catch (error) {
            console.error('Error deleting:', error);
            alert('An error occurred while deleting.');
        }
    };


    if (loading) {
        return <p>Loading classrooms...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

        


    return (
        <div className="container mt-4">
            <h3>Danh mục sản phẩm</h3>
            <Link to="/Add-ClassRoom" className="btn btn-primary mb-3">Thêm danh mục</Link>
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ClassRoom</th>
                        <th>Location</th>

                    </tr>
                </thead>

                <tbody>
                {classrooms.map(classroom => (
                    <tr key={classroom.id}>
                        <td>{classroom.class_name || 'Chưa có tên'}</td>
                        <td>{classroom.location || 'Chưa có tên'}</td>

                        <td>
                            <Link to={`/edit-ClassRoom/${classroom.id}`} className="btn btn-warning btn-sm me-2">Sửa</Link>

                            ||
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(classroom.id)}
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassRoomList;