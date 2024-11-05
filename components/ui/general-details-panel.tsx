import { Divider, Grid2 } from "@mui/material";
import React, { FC } from "react";

interface GeneralDetailsProps {
  name: string;
  phone: string;
  email: string;
  bvn: number;
  gender: "Male" | "Female";
  maritalStatus: string;
  children: number | "None";
  residence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officialEmail: string;
  income: string;
  loanRepayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantorName: string;
  guarantorPhone: string;
  guarantorEmail: string;
  relationshipWithGuarantor: string;
}

const GeneralDetailsPanel: FC<GeneralDetailsProps> = ({
  name,
  phone,
  email,
  bvn,
  gender,
  maritalStatus,
  children,
  residence,
  levelOfEducation,
  employmentStatus,
  sectorOfEmployment,
  durationOfEmployment,
  officialEmail,
  income,
  loanRepayment,
  twitter,
  facebook,
  instagram,
  guarantorName,
  guarantorPhone,
  guarantorEmail,
  relationshipWithGuarantor,
}) => {
  return (
    <div className="general-details">
      <div className="detail-block">
        <div className="title">
          <h2>Personal Information</h2>
        </div>
        <Grid2
          container
          spacing={{ xs: 3, md: 5 }}
          columns={{ xs: 6, sm: 9, md: 15 }}
        >
          <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
            <p>FULL NAME</p>
            <h3>{name}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
            <p>PHONE NUMBER</p>
            <h3>{phone}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
            <p className="email">EMAIL ADDRESS</p>
            <h3>{email}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
            <p>BVN</p>
            <h3>{bvn}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
            <p>GENDER</p>
            <h3>{gender}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
            <p>MARITAL STATUS</p>
            <h3>{maritalStatus}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
            <p>CHILDREN</p>
            <h3>{children}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
            <p>TYPE OF RESIDENCE</p>
            <h3>{residence}</h3>
          </Grid2>
        </Grid2>
      </div>
      <Divider className="divider" />
      <div className="detail-block">
        <div className="title">
          <h2>Education and Employment</h2>
        </div>
        <Grid2
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 6, md: 16 }}
        >
          <Grid2 size={{ xs: 2, sm: 3, md: 4 }}>
            <p>LEVEL OF EDUCATION</p>
            <h3>{levelOfEducation}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 4 }}>
            <p>EMPLOYMENT STATUS</p>
            <h3>{employmentStatus}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 4 }}>
            <p>SECTOR OF EMPLOYMENT</p>
            <h3>{sectorOfEmployment}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 4 }}>
            <p>DURATION OF EMPLOYMENT</p>
            <h3>{durationOfEmployment}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 4 }}>
            <p className="email">OFFICIAL EMAIL</p>
            <h3>{officialEmail}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 4 }}>
            <p>MONTHLY INCOME</p>
            <h3>{income}</h3>
          </Grid2>
          <Grid2 size={{ xs: 2, sm: 3, md: 4 }}>
            <p>LOAN REPAYMENT</p>
            <h3>{loanRepayment}</h3>
          </Grid2>
        </Grid2>
      </div>
      <Divider className="divider" />
      <div className="detail-block">
        <div className="title">
          <h2>Socials</h2>
        </div>
        <div className="content">
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 4, md: 8 }}
        >
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>TWITTER</p>
              <h3>{twitter}</h3>
            </Grid2>
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>FACEBOOK</p>
              <h3>{facebook}</h3>
            </Grid2>
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>INSTAGRAM</p>
              <h3>{instagram}</h3>
            </Grid2>
          </Grid2>
        </div>
      </div>
      <Divider className="divider" />
      <div className="detail-block">
        <div className="title">
          <h2>Guarantor</h2>
        </div>
        <div className="content-1">
        <Grid2
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 2, sm: 4, md: 8 }}
        >
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>FULL NAME</p>
              <h3>{guarantorName}</h3>
            </Grid2>
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>PHONE NUMBER</p>
              <h3>{guarantorPhone}</h3>
            </Grid2>
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>EMAIL ADDRESS</p>
              <h3>{guarantorEmail}</h3>
            </Grid2>
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>RELATIONSHIP</p>
              <h3>{relationshipWithGuarantor}</h3>
            </Grid2>
            
          </Grid2>
        </div>
        <Divider className="divider" />
        <div className="content-2">
        <Grid2
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 2, sm: 4, md: 8 }}
        >
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>FULL NAME</p>
              <h3>{guarantorName}</h3>
            </Grid2>
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>PHONE NUMBER</p>
              <h3>{guarantorPhone}</h3>
            </Grid2>
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>EMAIL ADDRESS</p>
              <h3>{guarantorEmail}</h3>
            </Grid2>
            <Grid2 size={{ xs: 1, sm: 2, md: 2 }}>
              <p>RELATIONSHIP</p>
              <h3>{relationshipWithGuarantor}</h3>
            </Grid2>
            
          </Grid2>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetailsPanel;
