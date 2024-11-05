import Table from "@/components/table";
import Card from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { CardData, images } from "@/constants";
import React from "react";

const Users = () => {
  return (
    <div className="container">
      <Header
        label="Users"
        fontFamily="workSans"
        fontSize="24px"
        fontWeight="500"
      />
      {/* Render Card Components */}
      <div className="cards-container">
        {
          CardData.map((data, index)=>(
            <div key={index} className="card-wrapper">
              <Card
              label={data.label}
              value={data.value}
              color={data.color}
              icon={images[data.icon]}
            />
            </div>
            
          ))
        }
      </div>

      {/* Render DataTable Component */}
      <Table/>
    </div>
  );
};

export default Users;
