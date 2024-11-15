import React, { useState } from 'react';
import '../styles/BottomSheet.css';
import Swal from 'sweetalert2';

const BottomSheet = ({ spotId, floor, lot, isOpen, onClose, onReserve, stillClaimed}) => {
  const [loading, setLoading] = useState(false); 

  const showAlert = (spotId) => {
    Swal.fire({
      icon: 'warning',
      title: 'Reservation Failed!',
      text: `Spot ${spotId} reservation failed! You can only reserve ONE spot at a time.`,
      confirmButtonText: 'Got it!',
      confirmButtonColor: '#3085d6'
    });
  };

  const showSuccessAlert = (spotId) => {
    Swal.fire({
      icon: 'success',
      title: 'Reservation Successful!',
      text: `Spot ${spotId} has been successfully reserved for you.`,
      confirmButtonText: 'Awesome!',
      confirmButtonColor: '#4CAF50', 
    });
  };

  const handleReserveClick = () => {
    setLoading(true);

    // this chunk of the code makes sure that each user gets only one reservation
    if (stillClaimed){
        setTimeout(() => {
        showAlert(spotId);
        setLoading(false); 
        onClose(); 
    }, 2000); // how long loading last 
    } else{
        setTimeout(() => {
        showSuccessAlert(spotId);
        onReserve(spotId); // Call onReserve to update the spot status in the parent component
        setLoading(false); // Stop loading after reservation completes
        onClose(); // close the bottom sheet when done loading
    }, 2000); // how long loading last 
    }
  };

  return (
    <div>
      {isOpen && <div className="overlay" onClick={onClose} />}
      <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
        <div className="bottom-sheet-content">
          <button className="close-button" onClick={onClose}>×</button>
          {/* Display the selected spot information */}
          <div className="spot-info">
            <h3>Spot {spotId}</h3>
            {/* conditional rendering for parking spot details */}
            {floor && lot ? (
              <p><strong>Location:</strong> {lot} - {floor}</p>
            ) : (
              <p><strong>Location:</strong> {lot}</p>
            )}
          </div>
          {/* buffering animation when clicking reserve */}
          {loading ? (
            <div className="loading-spinner"></div> // Loading animation
          ) : (
            <button className="book-button" onClick={handleReserveClick}>
              Reserve
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
