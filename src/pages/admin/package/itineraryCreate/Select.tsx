import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';
// import { styled } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   'Oliver Hansen',
//   'Van Henry', 
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];  

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
// const [snames, setNames] = useState([]);

// useEffect(() => {
//   const BadgesArray = packageBadges?.map(item => item.badge);
//   setNames(BadgesArray || []);
// }, [packageBadges]);


export default function MultipleSelectChip({packageBadges}) {
  const [snames, setNames] = useState([]);

  useEffect(() => {
    const BadgesArray = packageBadges?.map(item => item.badge);
    setNames(BadgesArray || []);
  }, [packageBadges]);


  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  // console.log("person name show ",personName)
  

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    if (value.length <= 4) {
      // setPersonName(value);
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }
  };

  return (
    <div>
    {snames &&(
      <FormControl  sx={{width:'35vw' ,'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border:'1px solid black' } }}>
        {/* <InputLabel id="demo-multiple-chip-label">City Badges</InputLabel> */}
        <Select
        
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          sx={{height:'auto'}}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput sx={{
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              borderColor: "gray !important",
              borderWidth: "1px !important",
              height:"auto"
            },}}  id="select-multiple-chip"  />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip sx={{fontSize:'12px', height:'0'}} key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {snames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{fontSize:'15px'}}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )}
    </div>
  );
}