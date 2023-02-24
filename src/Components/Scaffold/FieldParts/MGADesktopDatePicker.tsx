import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export interface MGADesktopDatePickerProps {
    label: string;
    value: Date | null;
    onChange: (newValue: Date | null) => void;
}


export const MGADesktopDatePicker = (props: MGADesktopDatePickerProps) => {
    
        const { label, value, onChange} = props;
    
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label={label}
                    //views={["day"]}
                    value={value}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="MM/DD/YYYY"
                    //InputProps styles text area
                    InputProps={{ 
                        sx: {"& .MuiSvgIcon-root" : {color: "primary.main"}}
                    }}
                    //PopperProps styles the pop-open calendar area
                    PopperProps={{}}
                    onChange={onChange}
                />
            </LocalizationProvider>
        );
    };