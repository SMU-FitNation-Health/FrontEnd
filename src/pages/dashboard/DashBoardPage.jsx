import React from "react";
import Footer from "../../layout/footer/Footer.jsx";
import DashBanner from "./components/banner/DashBanner.jsx";
import MetricsRow from "./components/card/MetricsRow.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import QuickLinks from "./components/QuickLinks.jsx";
import Header from "../../layout/header/Header.jsx";

export default function DashBoardPage() {
  const mockSeries = {
    weight:  [70.2, 70.1, 70.0, 70.3, 70.1, 69.9, 70.0],
    bodyFat: [21.5, 21.3, 21.1, 21.0, 20.9, 20.8, 20.7],
    sleep:   [6.1, 7.2, 6.8, 7.5, 7.0, 6.6, 7.3],
  };

  return (
    <div style={{ backgroundColor: '#F8F9FB' }}>
      <Header /> 
      <DashBanner />

      <MetricsRow
        weightSeries={mockSeries.weight}
        bodyFatSeries={mockSeries.bodyFat}
        sleepSeries={mockSeries.sleep}
      />

      <Calendar />

      <QuickLinks />

      <Footer />
    </div>
  );
}