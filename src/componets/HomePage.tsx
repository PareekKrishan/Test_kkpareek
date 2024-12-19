import { Avatar, Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

const typographyStyle = {
    color: "#6573c3",
    padding: "20px",
    borderBottom: '1px solid #2c387e',
    textAlign: 'center',
    width: "100%",
}



const tableData = [
    { id: 1, name: "Ashok Sharma", age: 25, mobile: "9876543210" },
    { id: 2, name: "Anil Gupta", age: 30, mobile: "9123456789" },
    { id: 3, name: "Rahul Verma", age: 28, mobile: "9988776655" },
    { id: 4, name: "Rakesh Saini", age: 25, mobile: "9977885566" },
    { id: 5, name: "Vikash Dube", age: 23, mobile: "9876123450" },

]


const HomePage = () => {
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
                        borderBottom: '2px solid #2c387e'
                    }}>

                    <Typography variant="h6" color="white">Name</Typography>

                    <Typography variant="h4" color="white">HOME</Typography>

                    <Avatar alt="user" src="pngwing.com (13).png" />

                </Box>

                <Box
                    sx={{
                        display: 'flex',

                        justifyContent: 'center'
                    }}
                >

                    <Box
                        sx={{
                            height: '86vh',
                            width: "20%",
                            bgcolor: "#1e2758",
                            padding: '30px 0px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >

                        <NavLink to={"/sign-up"}>

                            <Button variant="contained"
                                sx={{
                                    bgcolor: "#2c387e",
                                    color: '#6573c3',
                                    "&:hover": {
                                        color: 'white'
                                    }
                                }}
                            >
                                Sign up
                            </Button>

                        </NavLink>




                        <Typography sx={typographyStyle}>List</Typography>

                        <Typography sx={typographyStyle}>About</Typography>

                        <Typography sx={typographyStyle}>Contact</Typography>


                    </Box>




                    <Box sx={{ width: "80%", padding: "20px" }}>


                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow
                                        sx={{
                                            bgcolor: "#6573c3",

                                            "& th": {
                                                color: "white",
                                                fontWeight: "bold",
                                            },
                                        }}
                                    >
                                        <TableCell>S. No.</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>Mobile No.</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>


                                <TableBody>

                                    {tableData.map((row, index) => (

                                        <TableRow key={row.id}
                                            sx={{

                                                "& td": {
                                                    color: "#2c387e",

                                                },
                                            }}
                                        >

                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.age}</TableCell>
                                            <TableCell>{row.mobile}</TableCell>

                                            <TableCell>

                                                <IconButton>
                                                    <EditIcon sx={{ color: '#4caf50' }} />
                                                </IconButton>


                                                <IconButton >
                                                    <DeleteIcon sx={{ color: '#f44336' }} />
                                                </IconButton>

                                            </TableCell>


                                        </TableRow>

                                    ))}




                                </TableBody>


                            </Table>
                        </TableContainer>



                    </Box>





                </Box>

            </Box >

        </>
    )
}

export default HomePage