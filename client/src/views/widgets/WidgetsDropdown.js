import React from "react";
import { CWidgetDropdown, CRow, CCol } from "@coreui/react";

import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="31"
          text="Varieties of Coffee"
          footerSlot={
            <ChartLineSimple
              className="c-chart-wrapper mt-3 mx-3"
              style={{ height: "70px" }}
              dataPoints={[65, 59, 84, 84, 68, 77, 85]}
              backgroundColor="rgba(255,255,255,.2)"
              pointHoverBackgroundColor="light"
              label="Members"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="46"
          text="Cafes Registered"
          footerSlot={
            <ChartLineSimple
              className="c-chart-wrapper mt-3 mx-3"
              style={{ height: "70px" }}
              dataPoints={[65, 76, 84, 59, 68, 77, 75]}
              backgroundColor="rgba(255,255,255,.2)"
              pointHoverBackgroundColor="light"
              label="Members"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="14"
          text="Neighbourhoods Served"
          footerSlot={
            <ChartBarSimple
              pointed
              className="mt-3"
              style={{ height: "70px" }}
              dataPoints={[165, 159, 184, 184, 167, 197, 182]}
              backgroundColor="rgba(255,255,255,.2)"
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="light"
              label="Members"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="134"
          text="Orders Placed"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3"
              style={{ height: "70px" }}
              dataPoints={[65, 59, 84, 84, 67, 97, 122]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="light"
              label="Members"
              labels="months"
            />
          }
        ></CWidgetDropdown>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
