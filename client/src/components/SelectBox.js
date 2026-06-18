import React, { useEffect, useState } from 'react';
import {
  Box, FormControl, InputLabel, MenuItem,
  Select, Typography, InputAdornment
} from '@mui/material';
import YardIcon from '@mui/icons-material/Yard';
import axios from "axios";

function SelectBox({ plant, setPlant }) {
  const [plantDiseases, setPlantDiseases] = useState([]);

  const getDisease = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URL}/diseases`);
      // PENGAMAN: Hanya set state jika data yang kembali dari API benar-benar berbentuk Array
      if (Array.isArray(res.data)) {
        setPlantDiseases(res.data);
      } else {
        console.error("Respon API bukan array:", res.data);
        setPlantDiseases([]); // kembalikan ke array kosong agar tidak crash
      }
    } catch (e) {
      console.error("Gagal memuat data tanaman:", e);
      setPlantDiseases([]);
    }
  };

  useEffect(() => { getDisease(); }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        sx={{
          fontSize: '0.90rem',
          fontWeight: 600,
          color: 'var(--green-mid)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          mb: 0.8,
        }}
      >
        Jenis Tanaman
      </Typography>

      <FormControl fullWidth>
        <InputLabel
          id="plant-select-label"
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            color: 'var(--gray-500)',
            '&.Mui-focused': { color: 'var(--green-mid)' },
          }}
        >
          Pilih tanaman...
        </InputLabel>
        <Select
          labelId="plant-select-label"
          value={plant}
          label="Pilih tanaman..."
          onChange={(e) => setPlant(e.target.value)}
          startAdornment={
            plant ? null : (
              <InputAdornment position="start">
                <YardIcon sx={{ fontSize: 25, color: 'var(--green-bright)', ml: 0.5 }} />
              </InputAdornment>
            )
          }
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9rem',
            borderRadius: 'var(--radius-sm)',
            bgcolor: '#fff',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--gray-300)' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--green-bright)' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--green-mid)', borderWidth: '2px' },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: 'var(--radius-sm)',
                mt: 0.5,
                boxShadow: 'var(--shadow-lg)',
                maxHeight: 260,
                '& .MuiMenuItem-root': {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  py: 1,
                  '&:hover': { bgcolor: 'var(--green-pale)' },
                  '&.Mui-selected': {
                    bgcolor: 'var(--green-pale)',
                    color: 'var(--green-deep)',
                    fontWeight: 600,
                    '&:hover': { bgcolor: 'var(--green-light)' },
                  },
                },
              },
            },
          }}
        >
          {/* PENGAMAN UTAMA: Cek tipe data sebelum .map() */}
          {Array.isArray(plantDiseases) && plantDiseases.map(item => (
            <MenuItem key={item.key} value={item.key}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectBox;
