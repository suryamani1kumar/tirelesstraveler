import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Sign = (formConfig) => {
  return function SignModal(props){
    const { open, handleClose, onSumbit } = props;
    const [formData, setFormData] = useState(
      formConfig.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {})
    );
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
      let newErrors = {};
      formConfig.forEach((field) => {
        if (field.required && !formData[field.name].trim()) {
          newErrors[field.name] = `${field.label} is required`;
        }
        if (field.type === "email" && formData[field.name]) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData[field.name])) {
            newErrors[field.name] = "Invalid email format";
          }
        }
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        onSumbit(formData);
        handleClose(); // close modal after success
      }
    };

    return (
      <Modal show={open} onHide={handleClose}>
        <Modal.Body>
          {formConfig.map((input) => (
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              key={input.name}
            >
              <Form.Label>{input.label}</Form.Label>
              <Form.Control
                type={input.type}
                placeholder={input.placeholder}
                required={input.required}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
              />
              {errors[input.name] && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors[input.name]}
                </p>
              )}
            </Form.Group>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
};

export default Sign;
