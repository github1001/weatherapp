import React, { useState, useEffect } from 'react';
import { Container  } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { register } from '../actions/pasteBin';
import InputLabel from '@material-ui/core/InputLabel';
import '../App.css';
function Frontpage (props){


  
    const dispatch = useDispatch();
    const [city, setCity] = useState('FLe7z4');
    const userRegister = useSelector(state=>state.userRegister);
    const {loading,userInfo, error} = userRegister;
    const [value, setValue] = React.useState('FLe7z4LS');
   
    useEffect(() => {
        if(userInfo){
            console.log(userInfo.current.temp_c);
            console.log(userInfo.current.temp_f);

           document.getElementById("res").style.display='block';
           document.getElementById("celsius").innerHTML= userInfo.current.temp_c;
           document.getElementById("fahrenheit").innerHTML= userInfo.current.temp_f;
           
        }
        return () => {
         
          

        };
    }, [userInfo]);

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(register(city));
    }
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    return (
        <Container maxWidth="sm">
          <div className="text_center">
            <h1>Weather Today</h1>
          </div>
          <div className="">{"\n"}
          <TextField
          id="standard-multiline-flexible"
          label="API"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />
            <form className="w-100" onSubmit={submitHandler}>
              <FormControl className="w-100">
             
              <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
             
                
                
                  <Select labelId="demo-simple-select-label"
          id="demo-simple-select" name="city" value={city} onChange={(e)=>setCity(e.target.value)}
                    label="City"
                >

                  <MenuItem value={value}>Kuala Lumpur</MenuItem>
                  <MenuItem value="FLe7z4">Singapore</MenuItem>
                </Select>
              </FormControl>
              <br/> 
              <div className="text_center martop">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          </div>
          <div>
            {loading && <div>Loading...</div>}
            {error && <div>Messages : {error}</div>}
          </div>
          <div className="w-100" id="res">
            <Grid container spacing={3}>
              <Grid item xs={6} className="text_center">
                <h1 >Celsius</h1>
                <h3 id="celsius">0</h3>
              </Grid>
              <Grid item xs={6} className="text_center">
                <h1 >Fahrenheit </h1>
                <h3 id="fahrenheit">0</h3>
              </Grid>
            </Grid>
          </div>
        </Container>
  );

}

export default Frontpage;