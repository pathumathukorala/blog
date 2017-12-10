import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

//import "./index.css";
import "../assets/styles/base/_base.module.styl";
import styles from "../assets/styles/base/_header.module.styl";
import containerStyles from "../assets/styles/base/_wrapper.module.styl";

const ListLink = props => {
  const { header__link } = styles;

  return (
    <li key={props.to} className={header__link}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
};

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isMobileMenuOpen: false
    };

    this.onMenuIconClick = this.onMenuIconClick.bind(this);
  }

  onMenuIconClick() {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  }

  render() {
    const {
      header,
      header__container,
      header__logo,
      header__linklist,
      header__menuicon,
      header__menuicon__middle,
      header__menuicon_close_x,
      header__menuicon__middle_close_x,
      header__menu_content,
      header__menu_content_is_visible
    } = styles;

    const { wrapper, flex_container } = containerStyles;

    return (
      <div className={header}>
        <div className={wrapper}>
          <div className={flex_container}>
            <Link to="/" className={header__logo}>
              P}
            </Link>

            <div
              className={
                this.state.isMobileMenuOpen
                  ? `${header__menu_content} ${header__menu_content_is_visible}`
                  : header__menu_content
              }
            >
              <ul className={header__linklist}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/tags/">All Tags</ListLink>
                <ListLink to="/about/">About</ListLink>
              </ul>
            </div>
          </div>

          <div
            className={
              this.state.isMobileMenuOpen
                ? `${header__menuicon} ${header__menuicon_close_x}`
                : header__menuicon
            }
            onClick={this.onMenuIconClick}
          >
            <div
              className={
                this.state.isMobileMenuOpen
                  ? header__menuicon__middle_close_x
                  : header__menuicon__middle
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Pathum Athukorala - Blog"
      meta={[
        {
          name: "description",
          content: "Blog space for thoughts of Pathum Athukorala"
        },
        {
          name: "keywords",
          content: "pathum, athukorala, pathum athukorala, blog, tech, pwa"
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
