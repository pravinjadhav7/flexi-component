import React, { useState, useEffect } from "react";

const Flexi = ({ onSubmitFn, config }) => {
    const [inputVal, setInputVal] = useState("");
    const [ddVal, setDdVal] = useState("");

    useEffect(() => {
    }, []);

    const changeHandler = e => {
        setInputVal(e.target.value);
    };

    const changeHandlerDD = e => {
        setDdVal(e.target.value);
    };

    const formSubmitHandler = e => {
        e.preventDefault();
        onSubmitFn({ name: inputVal, dd: ddVal });
    };

    return (
        <>
            <div className='card mt-5'>
                <div className='card-header bg-white'>
                    <div className='h3'>Flexi form</div>
                </div>
                <div className='card-body'>
                    <form>
                        {(config.length > 0) ? config.map((val, index) => {

                            return <div>
                                {val.type === "TextField" &&
                                    <div className='form-group'>
                                        <label htmlFor={val.label}>{val.label}:</label>
                                        <input type="text" className='form-control' id={val.label} onChange={changeHandler} />
                                    </div>
                                }
                                {val.type === "DropDown" &&
                                    <div className='form-group'>
                                        <label htmlFor={val.label}>{val.label}:</label>
                                        <select type="text" className='form-control' id={val.label} onChange={changeHandlerDD}>
                                            <option value="" />
                                            {val.values.map(ddOption => {
                                                return <option value={ddOption}>{ddOption}</option>;
                                            })}
                                        </select>
                                    </div>
                                }
                            </div>
                        }) : <p>No data received</p>}
                    </form>
                </div>
                <div className='card-footer bg-white d-flex justify-content-center'>
                    <button type="submit" className='btn btn-lg btn-outline-success' onClick={formSubmitHandler}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default Flexi;
