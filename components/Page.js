import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';
import { cloudGet } from '../actions/cloud';
import Navigation from './Navigation';
// import routes from '../lib/routes';

class Page extends Component {
  constructor(props) {
    super(props);
    console.log('---------------');
    console.log(Router.route);
    // Router.push('/about')
  }
  componentWillReceiveProps({ hasCloudStore, cloud, cloudGet }) {
    if (!hasCloudStore && cloud.key && cloud.path) {
      cloudGet();
    }
  }
  render() {
    return (
      <div>
        <style jsx>
          {`
            .main display grid grid 1fr / 200px 1fr height 100vh;
          `}
        </style>
        <div className="main">
          <Navigation />
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
  cloudGet: PropTypes.func.isRequired,
  cloud: PropTypes.object.isRequired,
  hasCloudStore: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    cloud: state.settings.cloud,
    hasCloudStore: state.cloud.hasCloudStore,
  }),
  dispatch => ({
    cloudGet: () => dispatch(cloudGet()),
  }),
)(Page);
