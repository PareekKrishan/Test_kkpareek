import { Avatar, Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from 'axios'
import { NavLink } from "react-router-dom";





const fildStyle = {
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused": {
            "& fieldset": {
                borderColor: "#6573c3",
            },
        },
    },
    "& .MuiInputLabel-root": {
        "&.Mui-focused": {
            color: "#6573c3",
        },
    },
}






const SignUpPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')





    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }




    const handleSubmitted = async (e: React.FormEvent) => {

        e.preventDefault();




        try {
            const response = await axios.post('https//', { name: name, email: email, password: password })
            console.log(response)


            alert('Log In Successfully')

        }


        catch (error) {
            console.log(error)
            alert(
                'Something went wrong!'
            )
        }

    }






    return (
        <>



            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    bgcolor: "#2c387e"
                }}
            >


                <Box
                    sx={{
                        width: '100%',
                        height: '80px',
                        padding: "20px 80px",
                        bgcolor: "#1e2758",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '2px solid #2c387e',

                    }}>

                    <Avatar alt="user" src="pngwing.com (13).png" />

                    <Typography variant="h5" color="white">Sign Up Page</Typography>

                    <NavLink to={"/"}>

                        <Button variant="contained"
                            sx={{
                                bgcolor: "#2c387e",
                                color: '#6573c3',
                                "&:hover": {
                                    color: 'white'
                                }
                            }}
                        >
                            Home
                        </Button>

                    </NavLink>





                </Box>







                <Box
                    sx={{
                        position: 'absolute',
                        top: '60%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        borderRadius: '5px 5px 0 0',
                        width: '380px',
                        bgcolor: '#fff',
                        height: 'auto'

                    }}
                >


                    <Box
                        sx={{
                            width: '100%',
                            bgcolor: '#6573c3',
                            borderRadius: '5px 5px 0 0',
                        }}
                    >
                        <Typography lineHeight={'80px'} pl={'20px'} fontSize={'25px'} fontWeight={600} color='#fff'>SignUp Form</Typography>
                    </Box>



                    <form onSubmit={handleSubmitted}
                        style={{
                            padding: '30px 20px 25px 20px'
                        }}
                    >



                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>


                            <TextField onChange={handleName}
                                value={name}
                                label='Name'
                                type='text'
                                variant='outlined'
                                fullWidth
                                sx={fildStyle}
                                required
                            />

                            <TextField onChange={handleEmail}
                                value={email}
                                label='Email'
                                type='Email'
                                variant='outlined'
                                fullWidth
                                sx={fildStyle}
                                required
                            />

                            <TextField onChange={handlePassword}
                                value={password}
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                sx={fildStyle}
                                required

                            />

                            <Button

                                type="submit"
                                variant="contained"

                                sx={{
                                    bgcolor: '#2c387e',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    mt: 2,
                                    '&:hover': {
                                        bgcolor: '#6573c3'
                                    }
                                }}
                            >
                                SignUp

                            </Button>


                        </Box>



                    </form>



                </Box>

            </Box>




        </>
    );
};




export default SignUpPage