import React, { useState } from "react";
import FirstTab from "../FaceDemo/FirstTab";
import SecondTab from "../LicencePlates/SecondTab ";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import "./style.css";
import ThirdTab from "../../TryYourOwn/ThirdTab";
import ButtonsGroup from "../../ButtonsGroup/ButtonsGroup";

const TabsBox = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="Faces"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Licence plates"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Try your own"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <FirstTab />
          <ButtonsGroup />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <SecondTab />
          <ButtonsGroup />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <ThirdTab />
        </TabContent>
      </div>
    </div>
  );
};

export default TabsBox;
