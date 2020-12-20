import React, { useState } from 'react';

const AddMovie = () => {
    const [info, setInfo] = useState({});

    const handleOnChange = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const submit = (e) => {
        fetch('http://localhost:5000/addMovie', {
            method: 'POST',
            headers: {'Content-Type':' application/json'},
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(isAdded => {
            if(isAdded) alert('New movie added!');
        });

        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input type="text" name="movieName" placeholder="Name" onBlur={handleOnChange} required /><br />
                <input type="date" name="date" placeholder="date" onBlur={handleOnChange} required /><br />
                <input type="time" name="startTime" placeholder="start time" onBlur={handleOnChange} required /><br />
                <input type="time" name="endTime" placeholder="end time" onBlur={handleOnChange} required /><br />
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    );
};

export default AddMovie;