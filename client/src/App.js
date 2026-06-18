import { useState, useEffect } from "react";
import React from "react";
import image from "./Assets/Images/bg4.jpg";
import { useDropzone } from 'react-dropzone';
import Header from "./components/Header";
import Info from "./components/Info";
import SelectBox from "./components/SelectBox";
import axios from "axios";
import { makeStyles } from '@mui/styles';
import {
    Button,
    Container,
    Card,
    CardMedia,
    Typography,
    Box
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
	defaultButton: {
		width: "250px",
		borderRadius: "15px",
		padding: "8px",
		color: "#000000a6",
		fontSize: "20px",
		fontWeight: 900,
		// marginLeft: "32px",
		marginTop: "12px !important"
	},

	gridContainer: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column !important",
		justifyContent: "start",
		padding: "1em 1em 0 1em",
		maxWidth: "400px",
	},
	label: {
		color: "#fff",
		fontSize: "18px"
	},
	mainContainer: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center',
    minHeight: "100vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 40px 40px 40px',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.25)',
    }
},
glassContainer: {
    position: 'relative',
    zIndex: 1,

    width: '100%',
    maxWidth: '1200px',

    display: 'flex',
    gap: '30px',

    padding: '35px',

    borderRadius: '24px',

    background: 'rgba(255,255,255,0.15)',

    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',

    border: '1px solid rgba(255,255,255,0.25)',

    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
},
	imageCard: {
    width: 380,
    minHeight: 450,

    background: 'rgba(255,255,255,0.2)',

    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',

    border: '1px solid rgba(255,255,255,0.3)',

    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',

    borderRadius: '24px',

    padding: '10px'
},
	imageCardEmpty: {
		height: '300px',
	},
	noImage: {
		margin: "auto",
	},
	input: {
		display: 'none',
	},
	uploadIcon: {
		background: 'white',
	},

	appbar: {
		background: '#3f51b5',
		boxShadow: 'none',
		color: 'white'
	},
	detail: {
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
});

function App() {
    const classes = useStyles();
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [data, setData] = useState(null);
    const [image, setImage] = useState(false);
    const [plant, setPlant] = useState('');
    const [, setIsloading] = useState(false);

    const sendFile = async () => {
        if (plant === "") {
            toast.error("Mohon pilih jenis tanaman", {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        if (image) {
            setIsloading(true);
            let formData = new FormData();
            formData.append("file", selectedFile);
                // Menghilangkan tanda slash '/' setelah kata predict agar pas dengan endpoint FastAPI
                let res = await axios.post(`${process.env.REACT_APP_API_URL}/predict?name=${plant}`, formData);            if (res.status === 200) {
                setData(res.data)
            } else {
                setData(null)
            }
            setIsloading(false);
        }
    }

    const clearData = () => {
        setData(null);
        setImage(false);
        setSelectedFile(null);
        setPreview(null);
        setPlant('')
    };

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
    }, [selectedFile]);

    const getDisease = (() => {
        if (!preview) {
            return;
        }
        sendFile();
    });

    const { getRootProps, getInputProps } = useDropzone({
    accept: {'image/*': []},
    onDrop: (files) => onSelectFile(files)
    });

    const onSelectFile = (files) => {
        if (!files || files.length === 0) {
            setSelectedFile(undefined);
            setImage(false);
            setData(undefined);
            return;
        }
        setSelectedFile(files[0]);
        setData(undefined);
        setImage(true);
    };

    return (
    <React.Fragment>
        <Header />

        <Container
            maxWidth={false}
            className={classes.mainContainer}
            disableGutters
        >

            {!data ? (

                <Box
                    sx={{
                        display: 'flex',
                        gap: 4,
                        width: '100%',
                        maxWidth: '1200px',
                        position: 'relative',
                        zIndex: 1,
                        alignItems: 'stretch'
                    }}
                >

                    {/* PANEL KIRI */}
                    <Card
                        sx={{
                            flex: 1,
                            p: 4,
                            borderRadius: 4,
                            background: 'rgba(255,255,255,0.92)',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '3rem',
                                fontWeight: 800,
                                color: '#1B4332',
                                mb: 2
                            }}
                        >
                            PlantGuard
                        </Typography>

                        <Typography
                            sx={{
                                color: '#555',
                                lineHeight: 1.8,
                                mb: 3
                            }}
                        >
                            Sistem deteksi penyakit tanaman berbasis Artificial
                            Intelligence yang membantu petani mengidentifikasi
                            penyakit tanaman secara cepat dan akurat melalui
                            citra daun.
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                mb: 3
                            }}
                        >
                            <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                                <Typography variant="h5">20</Typography>
                                <Typography>Tanaman</Typography>
                            </Card>

                            <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                                <Typography variant="h5">AI</Typography>
                                <Typography>Detection</Typography>
                            </Card>

                            <Card sx={{ flex: 1, p: 2, textAlign: 'center' }}>
                                <Typography variant="h5">24/7</Typography>
                                <Typography>Analysis</Typography>
                            </Card>
                        </Box>

                        <Typography variant="h4" fontWeight={700} mb={1} fontSize={30} color={'#1B4332'}>
                            Guideline
                        </Typography>

                        <Box sx={{ mb: 1 }} color={'#1B4332'}>
                            🌿 Pilih Jenis Tanaman Yang Sesuai
                        </Box>

                        <Box sx={{ mb: 1 }} color={'#1B4332'}>
                            🪴 Unggah Gambar
                        </Box>

                        <Box sx={{ mb: 1 }} color={'#1B4332'}>
                            🔍 Klik Periksa
                        </Box>
                        <Box sx={{ mb: 1 }} color={'#1B4332'}>
                            📋 Lihat Hasil Analisis
                        </Box>

                        <Box color={'#1B4332'}>
                            🔄 Hapus Gambar
                        </Box>

                    </Card>

                    {/* PANEL KANAN */}
                    <Card
                        sx={{
                            width: 470,
                            p: 3,
                            borderRadius: 4,
                            background: 'rgba(255,255,255,0.92)',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 2,
                                fontWeight: 700
                            }}
                        >
                            Upload Gambar Daun
                        </Typography>

                        <SelectBox
                            plant={plant}
                            setPlant={setPlant}
                        />

                        <Box sx={{ mt: 3 }}>

                            {!image && (
                                <div
                                    {...getRootProps()}
                                    style={{
                                        border: '2px dashed #2D6A4F',
                                        borderRadius: '15px',
                                        padding: '50px',
                                        textAlign: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <input {...getInputProps()} />

                                    <Typography>
                                        Tarik & lepas gambar di sini
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1,
                                            color: '#666'
                                        }}
                                    >
                                        atau klik untuk memilih gambar
                                    </Typography>
                                </div>
                            )}

                            {image && (
                                <CardMedia
                                    component="img"
                                    image={preview}
                                    sx={{
                                        height: 300,
                                        borderRadius: 2,
                                        objectFit: 'cover'
                                    }}
                                />
                            )}
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                height: 50,
                                borderRadius: 2,
                                backgroundColor: '#2D6A4F',
                                '&:hover': {
                                    backgroundColor: '#1B4332',
                                }
                            }}
                            onClick={getDisease}
                        >
                            Periksa
                        </Button>

                    </Card>

                </Box>

            ) : (

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 4,
                        width: '100%',
                        maxWidth: '1200px',
                        position: 'relative',
                        zIndex: 1,
                        alignItems: 'flex-start'
                    }}
                    
                >

                    {/* GAMBAR */}
                    <Card
                        sx={{
                            width: 450,
                            p: 2,
                            borderRadius: 4,
                            boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={preview}
                            sx={{
                                borderRadius: 2,
                                maxHeight: 500,
                                objectFit: 'cover'
                            }}
                        />

                        <Button
                            fullWidth
                            color="error"
                            variant="contained"
                            sx={{ mt: 2 }}
                            onClick={clearData}
                        >
                            Hapus Gambar
                        </Button>
                    </Card>

                    {/* HASIL */}
                    <Info data={data} />

                </Box>

            )}

        </Container>

        <ToastContainer />
    </React.Fragment>
);
}

export default App;
