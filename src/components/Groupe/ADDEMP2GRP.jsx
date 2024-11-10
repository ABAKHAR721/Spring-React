import React, { useState } from 'react';
import { assignEmployeToGroupe } from '../../services/GroupService';

const AssignEmployeToGroupe = () => {
    const [employeId, setEmployeId] = useState('');
    const [groupeId, setGroupeId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await assignEmployeToGroupe(employeId, groupeId);
            setEmployeId('');
            setGroupeId('');
        } catch (error) {
            console.error('Error assigning employee to group:', error);
        }
    };

    return (
        <div className="container">
            <h2>Assign Employee to Group</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="employeId">Employee ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="employeId"
                        value={employeId}
                        onChange={(e) => setEmployeId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="groupeId">Group ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="groupeId"
                        value={groupeId}
                        onChange={(e) => setGroupeId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Assign</button>
            </form>
        </div>
    );
};

export default AssignEmployeToGroupe;
