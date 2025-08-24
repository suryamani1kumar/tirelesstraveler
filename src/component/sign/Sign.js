import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Sign = (formConfig) => {
  return function SignModal(props) {
    const { open, handleClose, onSumbit, showSignUp ,handleopen} = props;
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
        <Modal.Body className="pb-0">
          {formConfig.map((input) => (
            <Form.Group
              className="mb-3"
              controlId={input.name}
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
        <div className="px-4 text-center">
          <Button variant="primary" onClick={handleSubmit}>
            Sumbit
          </Button>
          <div className="pb-3 pt-2">
            {showSignUp ? (
              <div style={{ color: "#0d6efd", cursor: "pointer" }} onClick={handleopen}>
                Don’t have an account? Register now.
              </div>
            ) : (
              <div style={{ color: "#0d6efd", cursor: "pointer" }} onClick={handleopen}>
                Already have an account? Log in
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
  };
};

export default Sign;
