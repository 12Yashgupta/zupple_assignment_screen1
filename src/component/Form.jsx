// import "../component/Form.css";
// import React, { useState } from "react";
// import axios from "axios";

// export const Form = () => {
//   // Hooks react-part
//   const [formData, setFormData] = useState({
//     authorizationKey: "",
//     title: "",
//     description: "",
//     tags: "",
//     date: "",
//     software: "",
//     thumbnailImg: null,
//     sourceFile: null,
//   });

//   // Hooks for handling errors
//   const [errors, setErrors] = useState({});

//   // Hooks for set true false when form will submit
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Saving changes when a user input on field
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handling changes when file will upload
//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.files[0],
//     });
//   };

//   // Validating form and give errors
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.authorizationKey.trim()) {
//       newErrors.authorizationKey = "Authorization Key is required";
//     }

//     if (!formData.title.trim()) {
//       newErrors.title = "Title is required";
//     }

//     if (!formData.description.trim()) {
//       newErrors.description = "Description is required";
//     }

//     if (!formData.tags.trim()) {
//       newErrors.tags = "Tags are required";
//     }

//     if (!formData.date) {
//       newErrors.date = "Date is required";
//     }

//     if (!formData.software.trim()) {
//       newErrors.software = "Software is required";
//     }

//     if (!formData.thumbnailImg) {
//       newErrors.thumbnailImg = "Thumbnail Image is required";
//     }

//     if (!formData.sourceFile) {
//       newErrors.sourceFile = "Source File is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handling the part when user will submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const formDataToSend = new FormData();

//         for (const key in formData) {
//           formDataToSend.append(key, formData[key]);
//         }

//         const response = await axios.post(
//           "https://jsonplaceholder.typicode.com/posts",
//           formData
//         );
//         console.log(response.data);
//         setIsSubmitted(true);
//       } catch (error) {
//         console.error("Error submitting form:", error.message);
//       }
//     }
//   };

//   return (
//     // This is HTML code.
//     <div className="main">
//       <div class="ball1"></div>
//       <div class="ball2"></div>
//       <div class="ball3"></div>
//       <div className="formContainer">
//         <form onSubmit={handleSubmit}>
//           <p>UIDesignDaily</p>
//           <p className="formHeader">Upload files</p>

//           <div className="inputContainer">
//             <div className="inputSection">
//                 <div className="inputsecDiv">
//                   {/* label and input for authorizationKey field */}
//                     <label htmlFor="authorizationKey">Authorization key</label>
//                     <input
//                         placeholder="Authorization key"
//                         type="password"
//                         name="authorizationKey"
//                         value={formData.authorizationKey}
//                         onChange={handleChange}
//                         className="inputField"
//                     />
//                     {/* This is an error if authorizationKey field will be empty */}
//                     {errors.authorizationKey && (
//                       <p className="error">{errors.authorizationKey}!</p>
//                     )}
//               </div>

//               <div className="inputsecDiv">
//                   {/* Label and input for title field */}
//                   <label htmlFor="title">Title</label>
//                   <input
//                       placeholder="Title"
//                       className="inputField"
//                       type="text"
//                       name="title"
//                       value={formData.title}
//                       onChange={handleChange}
//                   />
//                   {/* This is an error if title field will be empty */}
//                   {errors.title && <p className="error">{errors.title}!</p>}
//               </div>

//               {/* Label and input for description field */}
//               <div className="description">
//                 <label htmlFor="description">Description</label>
//                 <textarea
//                     placeholder="Description"
//                     style={{ height: "160px" }}
//                     className="inputField"
//                     type="text"
//                     id=""
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                 />
//                 {/* This is an error if description field will be empty */}
//                 {errors.description && (
//                   <p className="error">{errors.description}!</p>
//                 )}
//               </div>
//             </div>

//             <div className="inputSection">
//               <div className="inputsecDiv">
//                 {/* Label and input for tags field */}
//                 <label htmlFor="tags">Tags (comma separated)</label>
//                 <input
//                     className="inputField"
//                     type="text"
//                     placeholder="Tags (comma separated)"
//                     name="tags"
//                     value={formData.tags}
//                     onChange={handleChange}
//                 />
//                 {/* This is an error if tag field will be empty */}
//                 {errors.tags && <p className="error">{errors.tags}!</p>}
//               </div>

//               <div className="inputsecDiv">
//                 {/* Label and input for date field */}
//                 <label htmlFor="date">Date</label>
//                 <input
//                     className="inputField"
//                     id=""
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
                  
//                 />
//                 {/* This is an error if date field will be empty */}
//                 {errors.date && <p className="error">{errors.date}!</p>}
//               </div>

//               <div className="inputsecDiv">
//                   {/* Label and input for software field */}
//                 <label htmlFor="software">Software</label>
//                 <select
//                     id=""
//                     className="inputField"
//                     name="software"
//                     value={formData.software}
//                     onChange={handleChange}
//                  >
//                     <option value="">select value</option>
//                     <option value="sketch">sketch</option>
//                     <option value="option2">option2</option>
//                     <option value="option3">option3</option>
//                   </select>
//                   {/* This is an error if software field will be empty */}
//                   {errors.software && <p className="error">{errors.software}!</p>}
//               </div>

//               <div class="fileUpload">
//                 <div id="thumbnailSource">
//                   {/* Label and input for thumbnail field */}
//                   <label htmlFor="thumbnailImg" id="thumbnailLabel">
//                     Thumbnail Image
//                   </label>
//                   <input
//                     style={{
//                       backgroundColor: "rgb(28 37 59)",
//                       color: "grey",
//                       padding: "5px",
//                     }}
//                     type="file"
//                     id="thumnailInput"
//                     name="thumbnailImg"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="hidden"
//                   />
//                   {/* This is an error if thumbnail field will be empty */}
//                   {errors.thumbnailImg && (
//                     <p className="thumbnailError">{errors.thumbnailImg}!</p>
//                   )}
//                 </div>

//                 <div>
//                   <div>
//                     {/* Label and input for source field */}
//                     <label id="sourceLabel" htmlFor="sourceFile">
//                       Source File
//                     </label>
//                     <input
//                       style={{
//                         backgroundColor: "rgb(28 37 59)",
//                         color: "grey",
//                         padding: "5px",
//                       }}
//                       type="file"
//                       name="sourceFile"
//                       onChange={handleFileChange}
//                       id="sourceInput"
//                     />
//                   </div>
//                   {/* This is an error if source field will be empty */}
//                   {errors.sourceFile && (
//                     <p className="error">{errors.sourceFile}!</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="submitDiv">
//             {/* This is a submit button */}
//             <button type="submit" className="submitButton">
//               submit
//               {/* If all fields are filled successfully, then success message will be shown */}
//               {isSubmitted && (
//                 <p className="success-message">form submitted successfully!</p>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


import "../component/Form.css";
import React, { useState } from "react";
import axios from "axios";

export const Form = () => {
  // Hooks react-part
  const [formData, setFormData] = useState({
    authorizationKey: "",
    title: "",
    description: "",
    tags: "",
    date: "",
    software: "",
    thumbnailImg: null,
    sourceFile: null,
  });

  // Hooks for handling errors
  const [errors, setErrors] = useState({});

  // Hooks for set true false when form will submit
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Saving changes when a user input on field
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handling changes when file will upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  // Validating form and give errors
  const validateForm = () => {
    const newErrors = {};

    if (!formData.authorizationKey.trim()) {
      newErrors.authorizationKey = "Authorization Key is required";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.tags.trim()) {
      newErrors.tags = "Tags are required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.software.trim()) {
      newErrors.software = "Software is required";
    }

    if (!formData.thumbnailImg) {
      newErrors.thumbnailImg = "Thumbnail Image is required";
    }

    if (!formData.sourceFile) {
      newErrors.sourceFile = "Source File is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handling the part when user will submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();

        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }

        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          formData
        );
        console.log(response.data);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    }
  };

  return (
    // This is HTML code.
    <div className="main">
      <div class="ball1"></div>
      <div class="ball2"></div>
      <div class="ball3"></div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <p>UIDesignDaily</p>
          <p className="formHeader">Upload files</p>

          <div className="inputContainer">
            <div className="inputSection">
                <div className="inputsecDiv">
                  {/* label and input for authorizationKey field */}
                    <label htmlFor="authorizationKey">Authorization key</label>
                    <input
                        placeholder="Authorization key"
                        type="password"
                        name="authorizationKey"
                        value={formData.authorizationKey}
                        onChange={handleChange}
                        className="inputField"
                    />
                    {/* This is an error if authorizationKey field will be empty */}
                    {errors.authorizationKey && (
                      <p className="error">{errors.authorizationKey}!</p>
                    )}
              </div>

              <div className="inputsecDiv">
                  {/* Label and input for title field */}
                  <label htmlFor="title">Title</label>
                  <input
                      placeholder="Title"
                      className="inputField"
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                  />
                  {/* This is an error if title field will be empty */}
                  {errors.title && <p className="error">{errors.title}!</p>}
              </div>

              {/* Label and input for description field */}
              <div className="description">
                <label htmlFor="description">Description</label>
                <textarea
                    placeholder="Description"
                    style={{ height: "160px" }}
                    className="inputField"
                    type="text"
                    id=""
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                {/* This is an error if description field will be empty */}
                {errors.description && (
                  <p className="error">{errors.description}!</p>
                )}
              </div>
            </div>

            <div className="inputSection">
              <div className="inputsecDiv">
                {/* Label and input for tags field */}
                <label htmlFor="tags">Tags (comma separated)</label>
                <input
                    className="inputField"
                    type="text"
                    placeholder="Tags (comma separated)"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                />
                {/* This is an error if tag field will be empty */}
                {errors.tags && <p className="error">{errors.tags}!</p>}
              </div>

              <div className="inputsecDiv">
                {/* Label and input for date field */}
                <label htmlFor="date">Date</label>
                <input
                    className="inputField"
                    id=""
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  
                />
                {/* This is an error if date field will be empty */}
                {errors.date && <p className="error">{errors.date}!</p>}
              </div>

              <div className="inputsecDiv">
                  {/* Label and input for software field */}
                <label htmlFor="software">Software</label>
                <select
                    id=""
                    className="inputField"
                    name="software"
                    value={formData.software}
                    onChange={handleChange}
                 >
                    <option value="">select value</option>
                    <option value="sketch">sketch</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                  </select>
                  {/* This is an error if software field will be empty */}
                  {errors.software && <p className="error">{errors.software}!</p>}
              </div>

              <div class="fileUpload">
                <div id="thumbnailSource">
                  {/* Label and input for thumbnail field */}
                  <label htmlFor="thumbnailImg" id="thumbnailLabel">
                    Thumbnail Image
                  </label>
                  <input
                    style={{
                      backgroundColor: "rgb(28 37 59)",
                      color: "grey",
                      padding: "5px",
                    }}
                    type="file"
                    id="thumnailInput"
                    name="thumbnailImg"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {/* This is an error if thumbnail field will be empty */}
                  {errors.thumbnailImg && (
                    <p className="thumbnailError">{errors.thumbnailImg}!</p>
                  )}
                </div>

                <div>
                  <div>
                    {/* Label and input for source field */}
                    <label id="sourceLabel" htmlFor="sourceFile">
                      Source File
                    </label>
                    <input
                      style={{
                        backgroundColor: "rgb(28 37 59)",
                        color: "grey",
                        padding: "5px",
                      }}
                      type="file"
                      name="sourceFile"
                      onChange={handleFileChange}
                      id="sourceInput"
                    />
                  </div>
                  {/* This is an error if source field will be empty */}
                  {errors.sourceFile && (
                    <p className="error">{errors.sourceFile}!</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="submitDiv">
            {/* This is a submit button */}
            <button type="submit" className="submitButton">
              submit
              {/* If all fields are filled successfully, then success message will be shown */}
              {isSubmitted && (
                <p className="success-message">form submitted successfully!</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
