import React from "react";
import { Layout, Icon, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import { NavigationLink } from "../styledcomponents/Link/NavLink";
import "./style.css";
import { connect } from "react-redux";
import {
  TOGGLE_TO_HOME_SCREEN_NAVIGATION,
  CHECK_WHETHER_REFRESH_NAVIGATION
} from "../../redux/action/topbarnavigation/TopbarNavigation";
import { TopNavMenu } from "../styledcomponents/topnavigation/TopnavMenu";
// import ProfileImg from "../../assets/avatarui.jpg";
//import './Dashboard.css';
// const Search = Input.Search;
const { Header } = Layout;

class HeaderComponent extends React.Component {
  componentDidMount() {
    console.log(this.props.navpath);
  }

  // componentWillMount() {
  //   this.resolveAvatarHideAndSeek();
  // }

  //temporary avatar hiding problem
  // resolveAvatarHideAndSeek() {
  //   if (window.screen.height > 767) {
  //     console.log("seeked");
  //     console.log(window);
  //   }
  // }

  //conditional navigation renderer using redux
  renderNavigation = () => {
    if (this.props.navpath === "/master") {
      return (
        <TopNavMenu
          theme='dark'
          mode='horizontal'
          position='right'
          defaultSelectedKeys={["1"]}
        >
          <NavigationLink to='#' style={{ cursor: "default" }}>
            <div className='logo' />
          </NavigationLink>

          <NavigationLink to='/' style={{ marginLeft: "10px" }}>
            <div className='homebtn' />
          </NavigationLink>

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/plantlevel'>
                  <Icon type='dropbox' /> Plant
                </NavigationLink>
              </span>
            }
          />

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/categorylevel'>
                  <Icon type='dropbox' /> Category
                </NavigationLink>
              </span>
            }
          />

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/unitlevel'>
                  <Icon type='dropbox' /> Unit
                </NavigationLink>
              </span>
            }
          />

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/materiallevel'>
                  <Icon type='dropbox' /> Material
                </NavigationLink>
              </span>
            }
          />

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/equipmentlevel'>
                  <Icon type='dropbox' /> Equipment
                </NavigationLink>
              </span>
            }
          />

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/testlevel'>
                  <Icon type='dropbox' /> Test
                </NavigationLink>
              </span>
            }
          />

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/parameterlevel'>
                  <Icon type='dropbox' /> Parameter
                </NavigationLink>
              </span>
            }
          />

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/mixdesignlevel'>
                  <Icon type='dropbox' /> Mix Design
                </NavigationLink>
              </span>
            }
          />

          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <NavigationLink to='/master/sitelevel'>
                  <Icon type='dropbox' /> Site
                </NavigationLink>
              </span>
            }
          />
          <div className='master_logo_gap' />
          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <Avatar size='large'>
                  <Icon
                    type='user'
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      padding: "2px",
                      margin: "4px"
                    }}
                  ></Icon>
                </Avatar>
              </span>
            }
          >
            <Menu.Item key='15'>
              <Link to='/profile'>
                <Icon type='user' />
                Profile Setting
              </Link>
            </Menu.Item>
            <Menu.Item key='16'>
              <Link to='/logout'>
                <Icon type='logout' theme='outlined' twoToneColor />
                Log Out
              </Link>
            </Menu.Item>
          </SubMenu>
        </TopNavMenu>
      );
    } else if (this.props.navpath === "/samples") {
      return (
        <TopNavMenu
          theme='dark'
          mode='horizontal'
          position='right'
          defaultSelectedKeys={["1"]}
        >
          <NavigationLink to='#' style={{ cursor: "default" }}>
            <div className='logo' />
          </NavigationLink>

          <NavigationLink to='/' style={{ marginLeft: "10px" }}>
            <div className='homebtn' />
          </NavigationLink>

          <div className='samples_logo_gap' />
          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <Avatar size='large'>
                  <Icon
                    type='user'
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      padding: "2px",
                      margin: "4px"
                    }}
                  ></Icon>
                </Avatar>
              </span>
            }
          >
            <Menu.Item key='15'>
              <Link to='/profile'>
                <Icon type='user' />
                Profile Setting
              </Link>
            </Menu.Item>
            <Menu.Item key='16'>
              <Link to='/logout'>
                <Icon type='logout' theme='outlined' twoToneColor />
                Log Out
              </Link>
            </Menu.Item>
          </SubMenu>
        </TopNavMenu>
      );
    } else if (this.props.navpath === "/homescreen") {
      return (
        <TopNavMenu
          theme='dark'
          mode='horizontal'
          position='right'
          defaultSelectedKeys={["1"]}
        >
          <NavigationLink to='/'>
            <div className='logo' />
          </NavigationLink>
          <div className='homescreen_logo_gap' />
          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <Avatar size='large'>
                  <Icon
                    type='user'
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      padding: "2px",
                      margin: "4px"
                    }}
                  ></Icon>
                </Avatar>
              </span>
            }
          >
            <Menu.Item key='15'>
              <Link to='/profile'>
                <Icon type='user' />
                Profile Setting
              </Link>
            </Menu.Item>
            <Menu.Item key='16'>
              <Link to='/logout'>
                <Icon type='logout' theme='outlined' twoToneColor />
                Log Out
              </Link>
            </Menu.Item>
          </SubMenu>
        </TopNavMenu>
      );
    } else if (this.props.navpath === "/testtrials") {
      return (
        <TopNavMenu
          theme='dark'
          mode='horizontal'
          position='right'
          defaultSelectedKeys={["1"]}
        >
          <NavigationLink to='#' style={{ cursor: "default" }}>
            <div className='logo' />
          </NavigationLink>

          <NavigationLink to='/' style={{ marginLeft: "10px" }}>
            <div className='homebtn' />
          </NavigationLink>

          <div className='testrials_logo_gap' />
          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <Avatar size='large'>
                  <Icon
                    type='user'
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      padding: "2px",
                      margin: "4px"
                    }}
                  ></Icon>
                </Avatar>
              </span>
            }
          >
            <Menu.Item key='15'>
              <Link to='/profile'>
                <Icon type='user' />
                Profile Setting
              </Link>
            </Menu.Item>
            <Menu.Item key='16'>
              <Link to='/logout'>
                <Icon type='logout' theme='outlined' twoToneColor />
                Log Out
              </Link>
            </Menu.Item>
          </SubMenu>
        </TopNavMenu>
      );
    } else if (this.props.navpath === "/testconfiguration") {
      return (
        <TopNavMenu
          theme='dark'
          mode='horizontal'
          position='right'
          defaultSelectedKeys={["1"]}
        >
          <NavigationLink to='#' style={{ cursor: "default" }}>
            <div className='logo' />
          </NavigationLink>

          <NavigationLink to='/' style={{ marginLeft: "10px" }}>
            <div className='homebtn' />
          </NavigationLink>

          <div className='testrials_logo_gap' />
          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <Avatar size='large'>
                  <Icon
                    type='user'
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      padding: "2px",
                      margin: "4px"
                    }}
                  ></Icon>
                </Avatar>
              </span>
            }
          >
            <Menu.Item key='15'>
              <Link to='/profile'>
                <Icon type='user' />
                Profile Setting
              </Link>
            </Menu.Item>
            <Menu.Item key='16'>
              <Link to='/logout'>
                <Icon type='logout' theme='outlined' twoToneColor />
                Log Out
              </Link>
            </Menu.Item>
          </SubMenu>
        </TopNavMenu>
      );
    } else if (this.props.navpath === "/priviledges") {
      return (
        <TopNavMenu
          theme='dark'
          mode='horizontal'
          position='right'
          defaultSelectedKeys={["1"]}
        >
          <NavigationLink to='#' style={{ cursor: "default" }}>
            <div className='logo' />
          </NavigationLink>

          <NavigationLink to='/' style={{ marginLeft: "10px" }}>
            <div className='homebtn' />
          </NavigationLink>

          <div className='testrials_logo_gap' />
          <SubMenu
            title={
              <span className='submenu-title-wrapper'>
                <Avatar size='large'>
                  <Icon
                    type='user'
                    style={{
                      fontSize: "24px",
                      textAlign: "center",
                      padding: "2px",
                      margin: "4px"
                    }}
                  ></Icon>
                </Avatar>
              </span>
            }
          >
            <Menu.Item key='15'>
              <Link to='/profile'>
                <Icon type='user' />
                Profile Setting
              </Link>
            </Menu.Item>
            <Menu.Item key='16'>
              <Link to='/logout'>
                <Icon type='logout' theme='outlined' twoToneColor />
                Log Out
              </Link>
            </Menu.Item>
          </SubMenu>
        </TopNavMenu>
      );
    }
  };
  render() {
    return (
      <Header
        theme='dark'
        style={{
          paddingLeft: "14px",
          height: "55px",
          width: "100%",
          padding: 0,
          boxShadow: "0 1px 4px rgba(0,21,41,.08)",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start"
        }}
      >
        {this.renderNavigation()}
      </Header>
    );
  }
}

const mapStateToProps = state => {
  return {
    navpath: state.topbarNavigationReducers.navpath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleHomeScreenNavigation: () => {
      dispatch({ type: TOGGLE_TO_HOME_SCREEN_NAVIGATION });
      console.log("toggle to home screen navigation click dispatched");
    },
    navigationRefresh: () => {
      dispatch({ type: CHECK_WHETHER_REFRESH_NAVIGATION });
      console.log("check path while refresh dispatched");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
