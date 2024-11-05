"use client";
import { Avatar, Box, Divider, Skeleton, Tab, Tabs } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import CustomTabPanel from "./ui/custom-tabs-panel";
import GeneralDetailsPanel from "./ui/general-details-panel";
import EmptyTab from "./ui/empty-tab";

interface TabsPanelProps {
  id: string;
}

interface UserDataProps {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Inactive" | "Blacklisted" | "Pending" | "Active";
  userTier: number;
  bankBalance: string;
  accountNumber: number;
  bank: string;
  bvn: number;
  gender: "Male" | "Female";
  maritalStatus: string;
  children: number | "None";
  typeOfResidence: string;
  education: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officialEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    fullName: string;
    phone: string;
    email: string;
    relationship: string;
  };
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsPanel: FC<TabsPanelProps> = ({ id }) => {
  const mockUrl = process.env.mockUrl || "";
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const loadUserData = async (url: string): Promise<any> => {
      try {
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let selectData = [];

        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == id) {
            selectData.push(data[i]);
          }
        }

        return selectData;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData(mockUrl)
      .then((data) => setUserData(data))
      .catch((error) => console.error("Fetch error:", error));
  }, [mockUrl]);

  return (
    <div className="user-details">
      {isLoading ? (
        <Skeleton variant="rounded" height={240} width="100%" />
      ) : (
        <Box sx={{ width: "100%" }}>
          {userData.map((data, index) => (
            <div key={index}>
              <div className="tab-container">
                <div className="basic-info">
                  <div className="user-avatar">
                    <Avatar className="avatar">
                      <LuUser2 className="avatar-icon" />
                    </Avatar>
                  </div>
                  <div className="user-info">
                    <h2>{data.username}</h2>
                    <p>{data.id}</p>
                  </div>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <div className="user-tier">
                    <p>User Tier</p>
                    <div className="star-rating">
                      {[1, 2, 3].map((star) =>
                        star <= data.userTier ? (
                          <IoIosStar key={star} className="star filled" />
                        ) : (
                          <IoIosStarOutline key={star} className="star empty" />
                        )
                      )}
                    </div>
                  </div>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <div className="user-account">
                    <div className="bank-balance">
                      <h2 className="naira">N</h2>
                      <h2>{data.bankBalance}</h2>
                    </div>
                    <p>{`${data.accountNumber}/${data.bank}`}</p>
                  </div>
                </div>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="tabs-content"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#39CDCC",
                    },
                  }}
                >
                  <Tab
                    label="General Details"
                    className="tabs"
                    {...a11yProps(0)}
                  />
                  <Tab label="Documents" className="tabs" {...a11yProps(1)} />
                  <Tab
                    label="Bank Details"
                    className="tabs"
                    {...a11yProps(2)}
                  />
                  <Tab label="Loans" className="tabs" {...a11yProps(3)} />
                  <Tab label="Savings" className="tabs" {...a11yProps(4)} />
                  <Tab
                    label="App and System"
                    className="tabs"
                    {...a11yProps(5)}
                  />
                </Tabs>
              </div>
              <CustomTabPanel value={value} index={0}>
                <GeneralDetailsPanel
                  name={data.username}
                  phone={data.phone}
                  email={data.email}
                  bvn={data.bvn}
                  gender={data.gender}
                  maritalStatus={data.maritalStatus}
                  children={data.children}
                  residence={data.typeOfResidence}
                  levelOfEducation={data.education.levelOfEducation}
                  employmentStatus={data.education.employmentStatus}
                  sectorOfEmployment={data.education.sectorOfEmployment}
                  durationOfEmployment={data.education.durationOfEmployment}
                  officialEmail={data.email}
                  income={data.education.monthlyIncome}
                  loanRepayment={data.education.loanRepayment}
                  twitter={data.socials.twitter}
                  facebook={data.username}
                  instagram={data.socials.instagram}
                  guarantorName={data.guarantor.fullName}
                  guarantorPhone={data.guarantor.phone}
                  guarantorEmail={data.guarantor.email}
                  relationshipWithGuarantor={data.guarantor.relationship}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <EmptyTab />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <EmptyTab />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <EmptyTab />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <EmptyTab />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={5}>
                <EmptyTab />
              </CustomTabPanel>
            </div>
          ))}
        </Box>
      )}
    </div>
  );
};

export default TabsPanel;
