import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
 

const Youtubeform = () => {
    const form = useForm({
        defaultValues: {
            // username: "kushagra",
            // emailid: "kushagra@gmail.com",
            // channel: "infinity",
            phnumber: [{ number: '' }],
            age: 0,
            dob: new Date()
        }
    });
    const { register, handleSubmit, control, formState, setValue, reset } = form;
    const { errors } = formState;
    const { fields, append } = useFieldArray({
        name: 'phnumber',
        control,
    });

    const onsubmit = (data) => {
        console.log("form submitted", data);
    };

    const handlesetvalue = () => {
        setValue("username", "enter your name");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onsubmit)} noValidate className="form">
            <img src="https://i.pinimg.com/736x/36/6f/0c/366f0ca4f3546a6e34f8c5730658616c.jpg" alt="YouTube Logo" style={{ width: '150px',marginInlineStart:105 }} />

                <h1 className="form-title">YouTube Form</h1>
                
                <div className='form-control'>
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input type='text' id="username" {...register("username", { required: 'USERNAME IS REQUIRED' })} className="form-input" />
                    <p className="error">{errors.username?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor='emailid' className='form-label'>Email ID</label>
                    <input type='text' id="emailid" {...register("emailid")} className="form-input" />
                    <p className="error">{errors.emailid?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor='channel' className='form-label'>YT Channel Name</label>
                    <input type='text' id="channel" {...register("channel")} className="form-input" />
                    <p className="error">{errors.channel?.message}</p>
                </div>

                {fields.map((item, index) => (
                    <div key={item.id} className='form-control'>
                        <label htmlFor={`phnumber.${index}.number`} className='form-label'>Phone Number {index + 1}</label>
                        <input
                            type='text'
                            id={`phnumber.${index}.number`}
                            {...register(`phnumber.${index}.number`, { required: 'Phone number is required' })}
                            className="form-input"
                        />
                        <p className="error">{errors.phnumber?.[index]?.number?.message}</p>
                    </div>
                ))}
                <button type="button" className='add-button' onClick={() => append({ number: '' })}>Add Phone Number</button>

                <div className='form-control'>
                    <label htmlFor='age' className='form-label'>Your Age</label>
                    <input type='number' id="age" {...register("age", { required: 'AGE IS REQUIRED' })} className="form-input" />
                    <p className="error">{errors.age?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor='dob' className='form-label'>Birth Date</label>
                    <input type='date' id="dob" {...register("dob")} className="form-input" />
                    <p className="error">{errors.dob?.message}</p>
                </div>

                <div className='button-group'>
                    <button type="button" className='set-value-button' onClick={handlesetvalue}>SET value</button>
                    <button type="submit" className='submit-button'>Submit</button>
                    <button type='button' className='reset-button' onClick={() => { reset() }}>RESET</button>
                </div>
            </form>
            <DevTool control={control} />
        </div>
    );
}

export default Youtubeform;