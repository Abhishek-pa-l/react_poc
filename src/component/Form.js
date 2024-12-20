import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Form,
  FormGroup,
  FormItem,
  Label,
  Input,
  Button,
} from '@ui5/webcomponents-react';

const CustomForm = () => {
  const location = useLocation();
  const { book } = location.state || {}; // Retrieve the passed data

  const [formData, setFormData] = useState({
    title: book?.title || '',
    author: book?.author || '',
    publishedYear: book?.publishedYear || '',
    price: book?.price || '',
    availableCopies: book?.availableCopies || '',
    totalCopies: book?.totalCopies || '',
    publisher: book?.publisher || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Edit Book Details</h1>
      <Form
        headerText="Book Form"
        labelSpan="S12 M4 L4 XL4"
        layout="ResponsiveGridLayout"
      >
        <FormGroup title="Book Information">
          <FormItem labelContent={<Label>Title</Label>}>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onInput={handleInputChange}
            />
          </FormItem>
          <FormItem labelContent={<Label>Author</Label>}>
            <Input
              type="text"
              name="author"
              value={formData.author}
              onInput={handleInputChange}
            />
          </FormItem>
          <FormItem labelContent={<Label>Published Year</Label>}>
            <Input
              type="text"
              name="publishedYear"
              value={formData.publishedYear}
              onInput={handleInputChange}
            />
          </FormItem>
          <FormItem labelContent={<Label>Price</Label>}>
            <Input
              type="text"
              name="price"
              value={formData.price}
              onInput={handleInputChange}
            />
          </FormItem>
          <FormItem labelContent={<Label>Available Copies</Label>}>
            <Input
              type="text"
              name="availableCopies"
              value={formData.availableCopies}
              onInput={handleInputChange}
            />
          </FormItem>
          <FormItem labelContent={<Label>Total Copies</Label>}>
            <Input
              type="text"
              name="totalCopies"
              value={formData.totalCopies}
              onInput={handleInputChange}
            />
          </FormItem>
          <FormItem labelContent={<Label>Publisher</Label>}>
            <Input
              type="text"
              name="publisher"
              value={formData.publisher}
              onInput={handleInputChange}
            />
          </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
            <Button design="Positive" onClick={handleSubmit}>
              Save
            </Button>
            <Button design="Transparent" style={{ marginLeft: '1rem' }}>
              Cancel
            </Button>
          </FormItem>
        </FormGroup>
      </Form>
    </div>
  );
};

export default CustomForm;
