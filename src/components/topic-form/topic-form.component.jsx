import { useState } from 'react';

function TopicForm() {
  const defaultFormFields = {
    topicSubject: '',
    topicDescription: '',
    topicDate: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { subject, description } = formFields;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const handleSubmit = () => {
    console.log("submitted");

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="topicSubject"
          type="text"
          placeholder="Topic Subject"
          value={subject}
          label="subject"
          onChange={handleChange}
        ></input>
        <input
          name="topicDescription"
          type="text"
          placeholder="Topic Description"
          value={description}
          label="description"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}

export default TopicForm;
