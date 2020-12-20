import React, { useState } from 'react';

const Seat = ({ seat, bookedList, bookedSeats }) => {
    const isBooked = bookedSeats.indexOf(seat) !== -1 ? true : false;
    const [color, setColor] = useState("rgb(150, 150, 150)");

    const handleOnclick = () => {
        if (!isBooked) {
            if (bookedList.indexOf(seat) === -1) {
                if (bookedList.length < 10) {
                    bookedList.push(seat);
                    setColor("rgb(50, 250, 50)");
                } else {
                    alert("you already selected 10 seats");
                }
            } else {
                bookedList.splice(bookedList.indexOf(seat), 1)
                setColor("rgb(150, 150, 150)");
            }
        }
    }
    const style = {
        "cursor": "pointer"
    }
    return (
        <div className="p-4 ml-5 mx-5" onClick={handleOnclick} style={!isBooked ? style: {}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={isBooked? "rgb(250, 50, 50)": color} className="bi bi-check-square" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
            </svg>
        </div>
    );
};

export default Seat;