import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const initialValues = {
  plant_image: "",
  plant_type: "",
  day_duration: "",
  start_date: "",
};

function PlantForm(props) {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = { ...values };
    console.log(newPlant);
    props.addTech(newPlant);
    setTimeout(() => {
      history.push("/dashboard");
    }, 3000);
  };

  return (
    <div className="sbox">
	<h1>Tech Form</h1>
	
	<form className="form container" onSubmit={handleSubmit}>
	
	<label>
		Type:
		<input
		type="text"
		value={values.plant_type}
		onChange={onChange}
		name="plant_type"
		/>
	</label>
	<label>
		Image:
		<input
		type="text"
		value={values.plant_image}
		onChange={onChange}
		name="plant_image"
		/>
	</label>
	<label>
		Duration:
		<input
		type="text"
		value={values.day_duration}
		onChange={onChange}
		name="day_duration"
		/>
	</label>
	<label>
		Start Date:
		<input
		type="text"
		value={values.start_date}
		onChange={onChange}
		name="start_date"
		/>
	</label>
	<button>Add Plant</button>
	</form>
</div>
  );
}

const mapStatesToProps = (state) => {
  const { errors } = state;
  return {
    errors: errors,
  };
};

export default connect(mapStatesToProps, { addPlant })(PlantForm)