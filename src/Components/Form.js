import React, { Component } from "react";
import { isIpValid } from "./isValid";
// import classnames from "classnames";
import styled from "styled-components";

const Main = styled.form`
  border: solid 1px lightgrey;
  max-width: 1150px;
  margin: 0 auto;
  width: auto;
`;
const FormPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 20px;
  width: auto;
`;

const RadioDivControls = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitPanel = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border-top: solid 1px lightgrey;
`;
const ButtomCustom = styled.button`
  margin-right: 20px;
  border-radius: 100px;
  width: 140px;
`;
const FormSides = styled.div`
  border: solid 1px lightgrey;
  padding: 5px;
`;
const InputDiv = styled.div`
  margin-left: 100px;
`;
const InputData = styled.input`
  width: 300px;
  margin-left: 10px;
`;
const ErrorSpan = styled.span`
  margin-left: 100px;
`;

const SelectDiv = styled.div`
  margin-left: 70px;
`;
const PanelInput = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const SelectInput = styled(PanelInput)`
  justify-content: space-around;
  align-items: baseline;
`;
const SelectPanel = styled.select`
  margin-left: 10px;
  width: 210px;
  display: flex;
  justify-content: flex-end;
`;

const RefreshIcon = styled.div`
  cursor: pointer;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      ipAddress: "",
      wifiIpAddress: "",
      subnetMask: "",
      securityKey: "",
      defaultGateway: "",
      checkEthernetIp: "disabled",
      checkEthernetDNS: "disabled",
      checkWifi: "disabled",
      checkWifiSec: "disabled",
      checkWifiIp: "disabled",
      checkWifiDNS: "disabled",
      errors: {}
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checksFormState = this.checksFormState.bind(this);
  }

  checksFormState(ev) {
    console.log(ev.target.value);
    if (ev.target.name === "enableWifi") {
      this.state.checkWifi === "disabled"
        ? this.setState({
            checkWifi: ""
          })
        : this.setState({
            checkWifi: "disabled",
            checkWifiSec: "disabled",
            checkWifiIp: "disabled",
            checkWifiDNS: "disabled"
          });
    }
    if (ev.target.name === "checkWifiSec") {
      this.state.checkWifiSec === "disabled"
        ? this.setState({ checkWifiSec: "" })
        : this.setState({ checkWifiSec: "disabled" });
    }
    if (ev.target.value === "radioEthernetIpSET") {
      this.setState({ checkEthernetIp: "" });
    }
    if (ev.target.value === "radioEthernetIpAUTO") {
      this.setState({
        checkEthernetIp: "disable",
        ipAddress: "",
        subnetMask: "",
        defaultGateway: ""
      });
    }

    if (ev.target.value === "radioEthernetDnsSET") {
      this.setState({ checkEthernetDNS: "" });
    }
    if (ev.target.value === "radioEthernetDnsAUTO") {
      this.setState({ checkEthernetDNS: "disable" });
    }

    if (ev.target.value === "radioWifiIpSET") {
      this.setState({ checkWifiIp: "" });
    }
    if (ev.target.value === "radioWifiIpAUTO") {
      this.setState({ checkWifiIp: "disabled" });
    }
    if (ev.target.value === "radioWifiDnsSET") {
      this.setState({ checkWifiDNS: "" });
    }
    if (ev.target.value === "radioWifiDnsAUTO") {
      this.setState({ checkWifiDNS: "disabled" });
    }
  }

  handleDataChange(ev) {
    // console.log({ [ev.target.name]: ev.target.value });
    if (!!this.state.errors[ev.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[ev.target.name];
      this.setState({
        [ev.target.name]: ev.target.value,
        errors
      });
    } else {
      this.setState({
        [ev.target.name]: ev.target.value
      });
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    let errors = {};

    if (this.state.ipAddress === "") {
      errors.ipAddress = "Ip address can't be empty";
    } else if (!isIpValid(this.state.ipAddress)) {
      errors.ipAddress = "Ip address not correct";
    }
    if (this.state.wifiIpAddress === "") {
      errors.wifiIpAddress = "Ip address can't be empty";
    } else if (!isIpValid(this.state.wifiIpAddress)) {
      errors.wifiIpAddress = "Ip address not correct";
    }
    if (this.state.securityKey === "") {
      errors.securityKey = "Security key can't be empty";
    } else if (
      this.state.securityKey.length <= 5 ||
      this.state.securityKey.length >= 15
    ) {
      errors.securityKey = "Must be at least 5 and less then 15 characters";
    }
    this.setState({ errors });
    console.log(this.state);
    // ev.target.reset();
  }

  render() {
    return (
      <Main onSubmit={this.handleSubmit}>
        <FormPage>
          <FormSides>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend uk-text-bold">
                Ethernet Settings
              </legend>
              <RadioDivControls className="uk-form-controls uk-form-controls-text">
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="EthernetSettingsRadioIp"
                    value="radioEthernetIpAUTO"
                    onClick={this.checksFormState}
                    defaultChecked
                  />{" "}
                  Obtain an IP address automatically (DHCP/BootP)
                </label>
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="EthernetSettingsRadioIp"
                    value="radioEthernetIpSET"
                    onClick={this.checksFormState}
                  />{" "}
                  Use the following IP address:
                </label>
              </RadioDivControls>
              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    IP address: *
                    <InputData
                      disabled={this.state.checkEthernetIp}
                      className="uk-input"
                      name="ipAddress"
                      type="text"
                      value={this.state.ipAddress}
                      onChange={this.handleDataChange}
                    />
                  </label>
                </PanelInput>
                {!!this.state.errors.ipAddress ? (
                  <ErrorSpan className="uk-text-danger">
                    {this.state.errors.ipAddress}
                  </ErrorSpan>
                ) : (
                  <div />
                )}
                <PanelInput>
                  <label className="uk-form-label">
                    Subnet Mask: *
                    <InputData
                      disabled={this.state.checkEthernetIp}
                      className="uk-input"
                      name="subnetMask"
                      type="text"
                      value={this.state.subnetMask}
                      onChange={this.handleDataChange}
                    />
                  </label>
                </PanelInput>
                <PanelInput>
                  <label className="uk-form-label">
                    Default Gateway:
                    <InputData
                      disabled={this.state.checkEthernetIp}
                      className="uk-input"
                      type="text"
                      name="defaultGateway"
                      value={this.state.defaultGateway}
                      onChange={this.handleDataChange}
                    />
                  </label>
                </PanelInput>
              </InputDiv>

              <RadioDivControls className="uk-form-controls uk-form-controls-text">
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="EthernetSettingsRadioDNS"
                    value="radioEthernetDnsAUTO"
                    onClick={this.checksFormState}
                    defaultChecked
                  />{" "}
                  Obtain DNS server address automatically
                </label>
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="EthernetSettingsRadioDNS"
                    value="radioEthernetDnsSET"
                    onClick={this.checksFormState}
                  />{" "}
                  Use the following DNS server address:
                </label>
              </RadioDivControls>

              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    Preferred DNS server: *
                    <InputData
                      disabled={this.state.checkEthernetDNS}
                      className="uk-input"
                      type="text"
                    />
                  </label>
                </PanelInput>
                <PanelInput>
                  <label className="uk-form-label">
                    Alternative DNS server:
                    <InputData
                      disabled={this.state.checkEthernetDNS}
                      className="uk-input"
                      type="text"
                    />
                  </label>
                </PanelInput>
              </InputDiv>
            </fieldset>
          </FormSides>

          <FormSides>
            <legend className="uk-legend uk-text-bold">
              Wireless Settings
            </legend>
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                value="hidden"
                name="enableWifi"
                onClick={this.checksFormState}
              />{" "}
              Enable wifi:
            </label>
            <fieldset className="uk-fieldset">
              <SelectDiv className="uk-margin">
                <SelectInput>
                  <label className="uk-form-label">
                    Wireless Network Name: *
                    <SelectPanel
                      className="uk-select"
                      disabled={this.state.checkWifi}
                    >
                      <option value="">Please select...</option>
                      <option>SSID 1</option>
                      <option>SSID 2</option>
                      <option>SSID 3</option>
                    </SelectPanel>
                  </label>
                  <RefreshIcon>
                    {/*src="../img/refresh_icon.svg"*/}
                    <div alt="refresh" href="#1" uk-icon="icon: refresh" />
                  </RefreshIcon>
                </SelectInput>
              </SelectDiv>
              <label>
                <input
                  disabled={this.state.checkWifi}
                  className="uk-checkbox"
                  type="checkbox"
                  name="checkWifiSec"
                  onClick={this.checksFormState}
                />{" "}
                Enable Wireless Security:
              </label>
              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    Security Key: *
                    <InputData
                      disabled={this.state.checkWifiSec}
                      className="uk-input"
                      type="text"
                      name="securityKey"
                      onChange={this.handleDataChange}
                      value={this.state.securityKey}
                    />
                  </label>
                </PanelInput>
                {!!this.state.errors.securityKey ? (
                  <ErrorSpan className="uk-text-danger">
                    {this.state.errors.securityKey}
                  </ErrorSpan>
                ) : (
                  <div />
                )}
              </InputDiv>

              <RadioDivControls className="uk-form-controls uk-form-controls-text">
                <label>
                  <input
                    disabled={this.state.checkWifi}
                    className="uk-radio"
                    type="radio"
                    name="radioWifiIP"
                    value="radioWifiIpAUTO"
                    defaultChecked
                    onClick={this.checksFormState}
                  />{" "}
                  Obtain an IP address automatically (DHCP/BootP)
                </label>
                <label>
                  <input
                    disabled={this.state.checkWifi}
                    className="uk-radio"
                    type="radio"
                    name="radioWifiIP"
                    value="radioWifiIpSET"
                    onClick={this.checksFormState}
                  />{" "}
                  Use the following IP address:
                </label>
              </RadioDivControls>
              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    IP address: *
                    <InputData
                      disabled={this.state.checkWifiIp}
                      className="uk-input"
                      type="text"
                      name="wifiIpAddress"
                      value={this.state.WifiIpAddress}
                      onChange={this.handleDataChange}
                    />
                  </label>
                </PanelInput>
                {!!this.state.errors.wifiIpAddress ? (
                  <ErrorSpan className="uk-text-danger">
                    {this.state.errors.wifiIpAddress}
                  </ErrorSpan>
                ) : (
                  <div />
                )}
                <PanelInput>
                  <label className="uk-form-label">
                    Subnet Mask: *
                    <InputData
                      disabled={this.state.checkWifiIp}
                      className="uk-input"
                      type="text"
                    />
                  </label>
                </PanelInput>
                <PanelInput>
                  <label className="uk-form-label">
                    Default Gateway:
                    <InputData
                      disabled={this.state.checkWifiIp}
                      className="uk-input"
                      type="text"
                    />
                  </label>
                </PanelInput>
              </InputDiv>

              <RadioDivControls className="uk-form-controls uk-form-controls-text">
                <label>
                  <input
                    disabled={this.state.checkWifi}
                    className="uk-radio"
                    type="radio"
                    name="radioDNS"
                    value="radioWifiDnsAUTO"
                    onClick={this.checksFormState}
                    defaultChecked
                  />{" "}
                  Obtain DNS server address automatically
                </label>
                <label>
                  <input
                    disabled={this.state.checkWifi}
                    className="uk-radio"
                    type="radio"
                    name="radioDNS"
                    value="radioWifiDnsSET"
                    onClick={this.checksFormState}
                  />{" "}
                  Use the following DNS server address:
                </label>
              </RadioDivControls>

              <InputDiv className="uk-margin">
                <PanelInput>
                  <label className="uk-form-label">
                    Preferred DNS server: *
                    <InputData
                      disabled={this.state.checkWifiDNS}
                      className="uk-input"
                      type="text"
                    />
                  </label>
                </PanelInput>
                <PanelInput>
                  <label className="uk-form-label">
                    Alternative DNS server:
                    <InputData
                      disabled={this.state.checkWifiDNS}
                      className="uk-input"
                      type="text"
                    />
                  </label>
                </PanelInput>
              </InputDiv>
            </fieldset>
          </FormSides>
        </FormPage>
        <SubmitPanel>
          <ButtomCustom type="submit" className="uk-button uk-button-primary">
            Save
          </ButtomCustom>
          <ButtomCustom type="reset" className="uk-button uk-button-default">
            Cancel
          </ButtomCustom>
        </SubmitPanel>
      </Main>
    );
  }
}

export default Form;
