import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Rate, Checkbox, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import RadioGroup from 'components/UI/RadioGroup/RadioGroup';
import DragAndDropUploader from 'components/UI/ImageUploader/DragAndDropUploader';
import { Form, Label, GroupTitle, Description } from './Review.style';

const reviewPhotos = [
  {
    uid: '1',
    name: 'hotel-1.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '2',
    name: 'hotel-2.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '3',
    name: 'hotel-3.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

export default function ReviewForm() {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      reviewPhotos,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Overall Rating"
        htmlFor="ratings"
        error={errors.ratings && <span>This field is required!</span>}
      >
        <Controller
          name="ratings"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Rate onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
      </FormControl>
      <FormControl
        label="Title of your review"
        htmlFor="reviewTitle"
        error={errors.reviewTitle && <span>This field is required!</span>}
      >
        <Controller
          name="reviewTitle"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Summarize your visit  or highlight an interesting details"
            />
          )}
        />
      </FormControl>
      <FormControl
        label="Details of your review"
        htmlFor="reviewDetails"
        error={errors.reviewDetails && <span>This field is required!</span>}
      >
        <Controller
          name="reviewDetails"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input.TextArea
              rows={5}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Tell people about your experience: your room, location, amenities?"
            />
          )}
        />
      </FormControl>
      <Row type="flex" justify="space-between">
        <Col>
          <FormControl label="Service" htmlFor="serviceRatings">
            <Controller
              name="serviceRatings"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rate onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Rooms" htmlFor="roomsRatings">
            <Controller
              name="roomsRatings"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rate onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Cleanliness" htmlFor="cleanlinessRatings">
            <Controller
              name="cleanlinessRatings"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rate onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Food" htmlFor="foodRatings">
            <Controller
              name="foodRatings"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rate onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
      </Row>
      <FormControl>
        <Controller
          control={control}
          name="termsAndCondition"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <Checkbox onChange={onChange} checked={value}>
              I certify that this review is based on my own experience and is my
              genuine opinion of this hotel, and that I have no personal or
              business relationship with this establishment, and have not been
              offered any incentive or payment originating from the
              establishment to write this review. I understand that TripFinder
              has a zero-tolerance policy on fake reviews.
            </Checkbox>
          )}
        />
      </FormControl>
      <FormControl className="submit-container">
        <Button htmlType="submit" type="primary" size="large">
          Submit Your Review
        </Button>
      </FormControl>
    </Form>
  );
}
