import React, { useState } from "react";
import { Button, Checkbox, Label, TableCell, Textarea, TextInput } from "flowbite-react";
import { EnquiryList } from "./enquiry/EnquiryList";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Enquiry = () => {

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let saveEnquiry = (e) => {
    e.preventDefault();
    // let formData ={
    //   name:e.target.name.value, //here e refers to event, target for form and name is also of form
    //   email:e.target.email.value,
    //   phone:e.target.phone.value,
    //   message:e.target.message.value
    // }
    axios.post('http://localhost:8000/api/web/enquiry/insert',formData)
    .then((res)=>{
      console.log(res.data)
      toast.success("Enquiry saved successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    })
  };
  let getValue = (e) => {
      let inputName = e.target.name
      let inputValue = e.target.value
      let oldData = {...formData}
      oldData[inputName] = inputValue;
      setFormData(oldData)
  }
  return (
    <div>
      <ToastContainer />
      <div className="text-[40px] text-center justify-center py-6 font-bold">
        User Enquiry
      </div>
      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Bold</h2>
          <form action="" onSubmit={saveEnquiry}>
            <div className="py-3">
              <label htmlFor="name" className="font-bold">
                Name
              </label>
              <TextInput
                type="text"
                name="name"
                onChange={getValue}
                value={formData.name}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="py-3">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <TextInput
                type="email"
                name="email"
                onChange={getValue}
                value={formData.email}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="py-3">
              <label htmlFor="phone" className="font-bold">
                Phone
              </label>
              <TextInput
                type="text"
                name="phone"
                onChange={getValue}
                value={formData.phone}
                placeholder="Enter your phone"
                required
              />
            </div>
            <div className="py-3">
              <label htmlFor="message" className="font-bold">
                Message
              </label>
              <Textarea
                placeholder="Message..."
                name="message"
                onChange={getValue}
                value={formData.message}
                required
                rows={4}
              />
            </div>
            <div className="py-3">
              <Button type="submit" className="w-[100%]">
                Save
              </Button>
            </div>
          </form>
        </div>

        <EnquiryList />
        
      </div>
    </div>
  );
};


export default Enquiry;
