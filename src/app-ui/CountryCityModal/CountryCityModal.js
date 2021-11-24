import Button from "../../shared-ui/Button/Button";
import React, { useEffect, useState } from "react";
import {
  selectCountries,
  selectCitiesByCountry,
} from "../../features/jobs/slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./CountryCityModal.scss";

import { getCitiesByCountry } from "../../features/jobs/thunk";
import { Form, Checkbox } from "antd";

const CountryCityModal = ({
  setSelectedCitiesIds,
  setCountriesCitiesModal,
  setSelectedCountryId,
  selectedCountryId,
}) => {
  const dispatch = useAppDispatch();

  const [activeCountry, setActiveCountry] = useState(false);

  const [checkedList, setCheckedList] = useState(null);
  // const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const countries = useAppSelector(selectCountries);
  const cities = useAppSelector(selectCitiesByCountry);

  useEffect(() => {
    if (selectedCountryId) {
      dispatch(getCitiesByCountry(selectedCountryId));
    }
  }, [selectedCountryId]);

  const handleSelectedCities = (v) => {
    console.log("cities: ", v);
    setSelectedCitiesIds(v);
    // console.log(selectedCountryId);
  };
  const onSave = () => {
    setCountriesCitiesModal(false);
  };

  return (
    <div className="countries-cities-selector">
      <Form onFinish={onSave}>
        <div className="header">Where would you like to work?</div>

        <div className="country-city-wrapper">
          <div className="country-list">
            <div className="title">Countries</div>
            {countries.map((country, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveCountry(country);
                  setSelectedCountryId(country?.id);
                }}
                className={`country-list-item ${
                  activeCountry === country ? "active" : null
                }`}>
                <img
                  src={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${country.code}.svg`}
                />
                <div className="country-name">{country?.title}</div>
              </div>
            ))}
          </div>
          <div className="city-list">
            <div className="title">Select Cities</div>
            <Checkbox.Group onChange={handleSelectedCities}>
              {cities?.map((city, index) => (
                <div className="city-list-item">
                  <Checkbox value={`${city?.id}`}>{city?.title}</Checkbox>
                </div>
              ))}
            </Checkbox.Group>
          </div>
        </div>
        <div className="footer">
          <Button htmlType="submit">Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default CountryCityModal;
