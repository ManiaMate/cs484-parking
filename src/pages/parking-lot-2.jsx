import React, { useState } from 'react';
import '../styles/ParkingLotPage.css';
import BottomSheet from '../components/BottomSheet';
import ParkingGrid from '../components/ParkingGrid';
import Swal from 'sweetalert2';

function ParkingLotPage() {
  
  const [parkingSpots, setParkingSpots] = useState([
    { id: 'A-11', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'A-12', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'A-13', status: 'available', claimed: false, floor: '1st Floor',lot: 'Parking Lot # 2'},
    { id: 'A-14', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'B-11', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'B-12', status: 'available', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'B-13', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'B-14', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'C-11', status: 'available', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'C-12', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'C-13', status: 'available', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'C-14', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'D-11', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'D-12', status: 'occupied', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'D-13', status: 'available', claimed: false, floor: '1st Floor', lot: 'Parking Lot # 2' },
    { id: 'D-14', status: 'occupied', claimed: false, floor: '1st Floor' , lot: 'Parking Lot # 2'},
    { id: 'E-11', status: 'available', claimed: false, floor: '2nd Floor', lot: 'Parking Lot # 2' },
    { id: 'E-12', status: 'available', claimed: false, floor: '2nd Floor', lot: 'Parking Lot # 2' },
    { id: 'E-13', status: 'available', claimed: false, floor: '2nd Floor', lot: 'Parking Lot # 2' },
    { id: 'E-14', status: 'available', claimed: false, floor: '2nd Floor', lot: 'Parking Lot # 2' },
    { id: 'F-11', status: 'available', claimed: false, floor: '3rd Floor', lot: 'Parking Lot # 2' },
    { id: 'F-12', status: 'occupied', claimed: false, floor: '3rd Floor', lot: 'Parking Lot # 2' },
    { id: 'F-13', status: 'occupied', claimed: false, floor: '3rd Floor', lot: 'Parking Lot # 2' },
    { id: 'F-14', status: 'available', claimed: false, floor: '3rd Floor', lot: 'Parking Lot # 2'},
  ]);


  const [selectedSpot, setSelectedSpot] = useState(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [lotFloor, setLotFloor] = useState(null);
  const [lotName, setLotName] = useState(null);

  const [alreadyClaimed, setAlreadyClaimed] = useState(false); 


  // Opens the bottom sheet for the selected spot
  const handleSpotSelect = (spotId) => {
    const spot = parkingSpots.find((s) => s.id === spotId);
    setSelectedSpot(spotId);
    setIsBottomSheetOpen(true);
    setLotFloor(spot.floor);
    setLotName(spot.lot);
  };


  const handleReserve = (spotId, newStatus) => {
    setParkingSpots((prevSpots) =>
      prevSpots.map((spot) =>
        spot.id === spotId ? { ...spot, status: newStatus, claimed: true} : spot
      )
    );
    setAlreadyClaimed(true);
  };

  const handleUnreserve = (spotId) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: `Do you want to cancel your reservation for Spot ${spotId}?`,
      showCancelButton: true,
      confirmButtonText: 'Yes, unclaim it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        setParkingSpots((prevSpots) =>
          prevSpots.map((spot) =>
            spot.id === spotId ? { ...spot, status: 'available', claimed: false } : spot
          )
        );
        setAlreadyClaimed(false);
        Swal.fire({
          icon: 'info',
          title: 'Reservation Cancelled',
          text: `Your reservation for Spot ${spotId} has been cancelled.`,
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
        });
      }
    });
  };

  // Closes the bottom sheet
  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
    setSelectedSpot(null);
  };
  



 
  return (
    <div className="ParkingLotPage">
        <ParkingGrid 
            parkingSpots={parkingSpots} 
            onSpotSelect={handleSpotSelect} 
            floors={['1st Floor', '2nd Floor', '3rd Floor']}
            onUnreserve={handleUnreserve} />
            


        <BottomSheet 
            spotId={selectedSpot}
            floor={lotFloor}
            lot={lotName}
            isOpen={isBottomSheetOpen} 
            onClose={closeBottomSheet} 
            onReserve={() => handleReserve(selectedSpot, 'occupied')}
            stillClaimed={alreadyClaimed}
        />
    </div>
  );
}

export default ParkingLotPage;
