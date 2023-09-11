import React, { useState } from "react";
import { User } from "../../PageUsers/@types";

interface PageUserDetailMainProps {
  users: User;
}

const InfoSection = ({ users }: PageUserDetailMainProps) => (
  <div className="detailSectionInfo">
    <div className="boxDetail">
      <p className="boxDetail__title">First Name</p>
      <p className="boxDetail__text">{users.name.first}</p>
    </div>
    <div className="boxDetail">
      <p className="boxDetail__title">Last Name</p>
      <p className="boxDetail__text">{users.name.last}</p>
    </div>
    <div className="boxDetail">
      <p className="boxDetail__title">Title</p>
      <p className="boxDetail__text">{users.name.title}</p>
    </div>
    <div className="boxDetail">
      <p className="boxDetail__title">Age</p>
      <p className="boxDetail__text">{users.registered.age}</p>
    </div>
  </div>
);

const LocationSection = ({ users }: PageUserDetailMainProps) => (
  <div className="detailSectionLocation">
    <div className="boxDetail">
      <p className="boxDetail__title">City</p>
      <p className="boxDetail__text">{users.location.city}</p>
    </div>
    <div className="boxDetail">
      <p className="boxDetail__title">Country</p>
      <p className="boxDetail__text">{users.location.country}</p>
    </div>
    <div className="boxDetail">
      <p className="boxDetail__title">Post Code</p>
      <p className="boxDetail__text">{users.location.postcode}</p>
    </div>
    <div className="boxDetail">
      <p className="boxDetail__title">State</p>
      <p className="boxDetail__text">{users.location.state}</p>
    </div>
  </div>
);

const LoginSection = ({ users }: PageUserDetailMainProps) => (
  <div className="detailSectionLogin">
    <div className="boxDetail">
      <p className="boxDetail__title">UserName</p>
      <p className="boxDetail__text">{users.login.username}</p>
    </div>
    <div className="boxDetail">
      <p className="boxDetail__title">uuid</p>
      <p className="boxDetail__text">{users.login.uuid}</p>
    </div>
  </div>
);

const PageUserDetailMain = () => {
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const [currentSection, setCurrentSection] = useState("info");

  const renderSection = () => {
    switch (currentSection) {
      case "info":
        return <InfoSection users={userData} />;
      case "location":
        return <LocationSection users={userData} />;
      case "login":
        return <LoginSection users={userData} />;
      default:
        return null;
    }
  };

  return (
    <main className="pageUserDetailMain">
      {userData ? (
        <>
          <div className="sectionTabs">
            <p
              className={`tabInfo ${currentSection === "info" ? "active" : ""}`}
              onClick={() => setCurrentSection("info")}
            >
              Info
            </p>
            <p
              className={`tabLocation ${currentSection === "location" ? "active" : ""}`}
              onClick={() => setCurrentSection("location")}
            >
              Location
            </p>
            <p
              className={`tabLogin ${currentSection === "login" ? "active" : ""}`}
              onClick={() => setCurrentSection("login")}
            >
              Login
            </p>
          </div>
          {renderSection()}
        </>
      ) : (
        <div>Usuário não encontrado</div>
      )}
    </main>
  );
};

export default PageUserDetailMain;
