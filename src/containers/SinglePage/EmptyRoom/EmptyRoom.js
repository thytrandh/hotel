import { Fragment, useState } from "react";
import Heading from "components/UI/Heading/Heading";
import EmptyRoomWrapper from "./EmptyRoom.style";
import PropTypes from 'prop-types';
import RoomCard from "components/UI/RoomCard/RoomCard";
import Text from "components/UI/Text/Text";
import ReservationFormWrapper, { FormActionArea, ItemWrapper, ItemWrapperRoom, RoomGuestWrapper } from "../Reservation/Reservation.style";
import HtmlLabel from "components/UI/HtmlLabel/HtmlLabel";
import InputIncDec from "components/UI/InputIncDec/InputIncDec";
import { Button } from "antd";

const roomType = 'Standard';
const price = '123.000';
const furniture = '2 single beds, 1 large double bed, Minibar';
const dimension = '200';
const capacity = '3';



const RoomDescription = ({ price, roomType, furniture, dimension, capacity }) => {
   return (
    <Fragment>
        <Heading
            content={
                <Fragment>
                    <div className="room-type">{roomType}</div>
                    <div style={{display: "flex"}}>
                        <Text  style={{margin: "0 5px 0 0"}} as="p" content='Furniture: '/>
                        <Text as="p" content={furniture}/>
                    </div>
                    <div style={{display: "flex"}}>
                        <Text  style={{margin: "0 5px 0 0"}} as="p" content='Dimension: '/>
                        <Text as="p" content={dimension}/>  
                        <Text style={{margin: "0 0 0 3px"}}as="p" content='Square'/>  
                    </div>
                    <div style={{display: "flex"}}>
                        <Text  style={{margin: "0 5px 0 0"}} as="p" content='Capacity: '/>
                        <Text as="p" content={capacity}/>  
                        <Text style={{margin: "0 0 0 3px"}}as="p" content='Guest'/>  
                    </div>
                </Fragment>
            }
        />
        <Heading
            content={
                <Fragment>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Text as="span" content={price}  />
                        <Text as="span" content=" VND"/>
                        <Text as="p" content="/"/>
                        <Text as="p" content="night"/>
                        <Text as="p" content="/"/>
                        <Text as="p" content="room"/>
                    </div>
                </Fragment>
            }
        />
    </Fragment>
   )
}

const ChooseRoom = () => {
    const [formState, setFormState] = useState({room: 0,});
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

      const handleClickChooseRoom = () => {
        
      }

    return(
        <ReservationFormWrapper className="form-container">
            <div style={{display: "flex", alignItems: "center"}}>
                <RoomGuestWrapper>
                <ItemWrapperRoom>
                    <InputIncDec
                    id="room"
                    increment={() => handleIncrement('room')}
                    decrement={() => handleDecrement('room')}
                    onChange={(e) => handleIncDecOnChnage(e, 'room')}
                    value={formState.room}
                    />
                </ItemWrapperRoom>
                </RoomGuestWrapper>
                <FormActionArea>
                    <Button onClick={() => handleClickChooseRoom()} style={{borderRadius: "3px", cursor: "pointer"}} htmlType="submit" type="primary">
                        Choose Room
                    </Button>
                </FormActionArea>

            </div>
        </ReservationFormWrapper>
    )
}



const EmptyRoom =  ({titleStyle}) =>  {
    return (
        <EmptyRoomWrapper>
            <Heading as="h2" content="Empty Room" {...titleStyle}/>
            <div>
                <RoomCard
                    className="empty_room"
                    header={
                        <RoomDescription  
                        price = {price}
                        roomType={roomType}
                        furniture={furniture}
                        dimension={dimension}
                        capacity={capacity}
                        />
                    }
                    content={<ChooseRoom />}
                />
                <RoomCard
                    className="empty_room"
                    header={
                        <RoomDescription/>
                    }
                    content={<ChooseRoom />}
                />
            </div>
        </EmptyRoomWrapper>
    )
}

RoomDescription.propTypes = {
    priceStyle: PropTypes.object,
    pricePeriodStyle: PropTypes.object,
    linkStyle: PropTypes.object,
}

EmptyRoom.propTypes = {
    titleStyle: PropTypes.object,
    linkStyle: PropTypes.object,
  };
  
  EmptyRoom.defaultProps = {
    titleStyle: {
      color: '#2C2C2C',
      fontSize: ['17px', '20px', '25px'],
      lineHeight: ['1.15', '1.2', '1.36'],
      mb: ['14px', '20px', '30px'],
    },
    linkStyle: {
      fontSize: '15px',
      fontWeight: '700',
      color: '#008489',
    },
  };
  
export default EmptyRoom;