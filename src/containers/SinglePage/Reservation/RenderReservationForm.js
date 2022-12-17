import React, { Fragment, useState } from 'react';
import { Button } from 'antd';
import HtmlLabel from 'components/UI/HtmlLabel/HtmlLabel';
import DatePickerRange from 'components/UI/DatePicker/ReactDates';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
  RoomGuestWrapper,
  ItemWrapper,
} from './Reservation.style.js';
import Heading from 'components/UI/Heading/Heading.js';
import { borderBottom } from 'styled-system';

const RenderReservationForm = () => {
  const [formState, setFormState] = useState({
    startDate: null,
    endDate: null,
    room: 0,
    guest: 0,
  });

  const handleIncrement = (type) => {
    setFormState({
      ...formState,
      [type]: formState[type] + 1,
    });
  };
  const handleDecrement = (type) => {
    if (formState[type] <= 0) {
      return false;
    }
    setFormState({
      ...formState,
      [type]: formState[type] - 1,
    });
  };
  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setFormState({
      ...formState,
      [type]: currentValue,
    });
  };
  const updateSearchDataFunc = (value) => {
    setFormState({
      ...formState,
      startDate: value.setStartDate,
      endDate: value.setEndDate,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Start Date: ${formState.startDate}\nEnd Date: ${formState.endDate}\nRooms: ${formState.room}\nGuests: ${formState.guest}`
    );
  };

  return (
    <ReservationFormWrapper className="form-container " onSubmit={handleSubmit}>
      <p style={{fontWeight: "700", borderBottom: "1px dashed #EBEBEB", paddingBottom: "10px", fontSize: "16px"}}
      >
        Time for keeping room
      </p>
      <div style={{borderBottom: "1px dashed #EBEBEB", padding: "10px 0px"}}>
        <FieldWrapper>
          <HtmlLabel htmlFor="dates" content="Dates" />
          <DatePickerRange
            startDateId="checkin-Id"
            endDateId="checkout-id"
            startDatePlaceholderText="Check In"
            endDatePlaceholderText="Check Out"
            updateSearchData={(value) => updateSearchDataFunc(value)}
            numberOfMonths={1}
            small
          />
        </FieldWrapper>
        <FieldWrapper>
          <HtmlLabel htmlFor="guests" content="Guests" />
          <ViewWithPopup
            key={200}
            noView={true}
            className={formState.room || formState.guest ? 'activated' : ''}
            view={
              <Button type="default">
                <span>Room {formState.room > 0 && `: ${formState.room}`}</span>
                <span>-</span>
                <span>Guest{formState.guest > 0 && `: ${formState.guest}`}</span>
              </Button>
            }
            popup={
              <RoomGuestWrapper>
                <ItemWrapper>
                  <strong>Room</strong>
                  <InputIncDec
                    id="room"
                    increment={() => handleIncrement('room')}
                    decrement={() => handleDecrement('room')}
                    onChange={(e) => handleIncDecOnChnage(e, 'room')}
                    value={formState.room}
                  />
                </ItemWrapper>

                <ItemWrapper>
                  <strong>Guest</strong>
                  <InputIncDec
                    id="guest"
                    increment={() => handleIncrement('guest')}
                    decrement={() => handleDecrement('guest')}
                    onChange={(e) => handleIncDecOnChnage(e, 'guest')}
                    value={formState.guest}
                  />
                </ItemWrapper>
              </RoomGuestWrapper>
            }
          />
        </FieldWrapper>
        {/* <FormActionArea>
          <Button htmlType="submit" type="primary">
            Find Rooms
          </Button>
        </FormActionArea> */}
      </div>
      <div>
        <p style={{fontWeight: "700", paddingBottom: "10px", marginTop: "29px", fontSize: "16px"}}
        >
          Room Information
        </p>
       <div className="selected-room" style={{display: "flex", justifyContent: "space-between"}}>
        <div className="room-type" style={{display: "flex"}}>
          <p style={{fontWeight: "700", marginRight: "5px"}}>Room type: </p>
          <p>Startdard </p>
        </div>
        <div className="price" style={{display: "flex"}}>
          <p>300</p>
          <p>.000</p>
          <p>VND</p>
        </div>
       </div>
      </div>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
