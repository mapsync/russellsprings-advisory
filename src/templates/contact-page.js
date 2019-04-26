import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as Icon from 'react-feather';
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ content, contentComponent, name, address, city_state_zip, phone, alt_phone, fax }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <div className="container container-main grid-md">
        <div className="card">
          <div className="card-header">
            Address
          </div>
          <div className="card-body">
            {name}<br />
            {address}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Phone
          </div>
          <div className="card-body">
            T: <a href={"tel:1-" + phone}>{phone}</a>
            Emergency: <a href={"tel:1-" + alt_phone}>{alt_phone}</a>
            F: {fax}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Email
          </div>
          <div className="card-body">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="d-inline-block float-right">
          <a className="btn btn-sm btn-link tooltip tooltip-left" data-tooltip="Settings" rel="noopener noreferrer" href="https://russellsprings.geosync.cloud/admin" target="_blank">
            <Icon.Settings size={16}/>
          </a>
        </div>
      </div>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        name={post.frontmatter.name}
        address={post.frontmatter.address}
        city_state_zip={post.frontmatter.city_state_zip}
        phone={post.frontmatter.phone}
        alt_phone={post.frontmatter.alt_phone}
        fax={post.frontmatter.fax}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name,
        address,
        city_state_zip,
        phone,
        alt_phone,
        fax
      }
    }
  }
`
