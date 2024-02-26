"use client";

import React, { useState } from "react";
import Banner from "./components/banner";
import Students from "./components/students";

function Index() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="pt-24">
      {isVisible ? <Students /> : <Banner setIsVisible={setIsVisible} />}
    </div>
  );
}

export default Index;
