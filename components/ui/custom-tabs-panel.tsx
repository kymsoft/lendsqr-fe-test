import { Box } from "@mui/material";


interface CustomTabsPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

export default function CustomTabPanel(props: CustomTabsPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 4, bgcolor: 'white', boxShadow: '3px 5px 20px rgba(0, 0, 0, 0.04)', border: '1px solid rgba(33, 63, 125, 0.06)', mt: 4, borderRadius: '4px' }}>{children}</Box>}
      </div>
    );
  }

  