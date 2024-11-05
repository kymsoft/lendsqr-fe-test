// ui/filter-form.tsx
import { Button } from "@mui/material";
import { useState } from "react";

interface FilterFormProps {
  records: Array<{ organization: string; status: string; username: string; phone: string; email: string; dateJoined: string }>;
  uniqueOrganizations: string[];
  onApplyFilter: (filters: { status?: string; organization?: string; username?: string; phone?: string; email?: string; dateJoined?: string }) => void;
}

const FilterForm = ({ uniqueOrganizations, onApplyFilter }: FilterFormProps) => {
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  const [selectedOrganization, setSelectedOrganization] = useState<string | undefined>(undefined);
  const [selectedUsername, setSelectedUsername] = useState<string | undefined>(undefined);
  const [selectedPhone, setSelectedPhone] = useState<string | undefined>(undefined);
  const [selectedEmail, setSelectedEmail] = useState<string | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
  
  
  const handleApplyFilter = () => {
    onApplyFilter({ status: selectedStatus, organization: selectedOrganization, username: selectedUsername, phone: selectedPhone, email: selectedEmail, dateJoined: selectedDate });
  };
  const handleReset = () =>{
    setSelectedOrganization('')
    setSelectedEmail('')
    setSelectedStatus('')
    setSelectedUsername('')
    setSelectedPhone('')
    setSelectedDate('')
  }

  return (
    <div className="filter-form">
      <label className="filter-label">
        Organization:
        <select value={selectedOrganization || ""} onChange={(e) => setSelectedOrganization(e.target.value)} className="input">
          <option value="">Select</option>
          {uniqueOrganizations.map(org => (
            <option key={org} value={org}>{org}</option>
          ))}
        </select>
      </label>

      <label className="filter-label">Username</label>
      <input 
        value={selectedUsername || ''}
        onChange={(e) => setSelectedUsername(e.target.value)}
        className="input"
      />
      
      <label className="filter-label">Email</label>
      <input 
        value={selectedEmail || ''}
        onChange={(e) => setSelectedEmail(e.target.value)}
        type="email"
        className="input"
      />
      
      <label className="filter-label">Date</label>
      <input 
        value={selectedDate }
        onChange={(e) => setSelectedDate(e.target.value)}
        type="date"
        className="input"
      />

      <label className="filter-label">Phone Number</label>
      <input 
        value={selectedPhone || ''}
        onChange={(e) => setSelectedPhone(e.target.value)}
        type="tel"
        className="input"
      />

      <label className="filter-label">
        Status:
        <select value={selectedStatus || ""} onChange={(e) => setSelectedStatus(e.target.value)} className="input">
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>
      </label>


      <div className="filter-action-btn">
      <Button
        variant="outlined"
        onClick={handleReset}
        className="btn-reset"
      >
        Reset
      </Button>
      <Button
        variant="contained"
        onClick={handleApplyFilter}
        className="btn-filter"
      >
        Filter
      </Button>
      </div>
    </div>
  );
};

export default FilterForm;
