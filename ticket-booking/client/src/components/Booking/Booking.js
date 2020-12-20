import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Seat from './Seat';

const Booking = () => {
    const [loggedinUser] = useContext(userContext);
    const { id } = useParams();
    const [bookedSeats, setBookedSeats] = useState([]);
    let flag = true;
    useEffect(() => {
        fetch(`http://localhost:5000/getBookingByMovieId/${id}`)
        .then(res => res.json())
        .then(data => {
            data.map(booking => {
                setBookedSeats(prevState => [...booking.seats, ...prevState]);
            })
        })
    }, []);

    const seatNo = [];
    const bookedList = [];

    for(let i=0; i<40; ++i) seatNo.push(i);

    const handleBook = (e) => {
        const booking = {
            userName: loggedinUser.displayName || 'Anonymous',
            movieId: id,
            seats: bookedList
        }

        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(isAdded => {
            if(isAdded) {
                alert('Booked!');
                setBookedSeats(prevState => [...bookedList, ...prevState]);
            }
        });

        e.preventDefault();
    }


    return (
        <>
            <div className="d-flex justify-content-around flex-wrap mw-50">
                {
                    seatNo.map(seat => <Seat bookedList={bookedList} seat={seat} bookedSeats={bookedSeats} key={seat} />)
                }
            </div>
            {
                bookedSeats.length<40?
                <button className="btn btn-success mx-5" onClick={handleBook}>Book</button> :
                <button className="btn btn-danger mx-5">HouseFull</button>
            }
        </>
    );
};

export default Booking;