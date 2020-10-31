import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To YOUR_BRAND',
  description: 'Laborum voluptate officia quis voluptate proident elit.',
  keywords: 'Esse reprehenderit reprehenderit anim magna laboris nulla excepteur duis mollit occaecat reprehenderit amet fugiat.',
}

export default Meta
