import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  componentDidMount() {
    document.getElementById("map").src = "https://geosync.cloud/maps/b2426f0d-2082-494d-a650-6ffcef2a43f5" + this.props.location.search;
  }
  
  render() {
    return (
      <Layout>
      <iframe id="map" title="map" src="about:blank" allow="geolocation"></iframe>
      </Layout>
    )
  }
}
