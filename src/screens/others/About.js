import React, {useEffect} from 'react';
import {View, RefreshControl} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import {Screen, Header, AppText, ContactCard, Loader} from '../../components';
import {COLORS, END_POINT, ROUTES} from '../../constants';
import {logout} from '../../redux/auth/authAction';
import {setAboutUs} from '../../redux/drawer/drawerAction';
import {postApiCall} from '../../services/ApiServices';
import {Styles} from '../../styles';
import {Commons} from '../../utils';
function About(props) {
  const dispatch = useDispatch();
  const aboutUs = useSelector(state => state.drawer.aboutUs);
  const loader = useSelector(state => state.common.loader);
  const user = useSelector(state => state.user.currentUser);
  const userType = useSelector(state => state.common.userType);
  const [refreshing, setRefreshing] = React.useState(false);
  const iconSize = 28;
  const iconColor = COLORS.blue;

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getAboutDetails();
    });
    return unsubscribe;
  }, [props.navigation]);

  const onRefresh = () => {
    getAboutDetails();
  };

  const getAboutDetails = () => {
    setRefreshing(true);
    let data = {
      ID: user.ID,
      APIAccessToken: user.APIAccessToken,
      Type: userType,
    };
    let endPoint = data.Type === 'T' ? END_POINT.T_ABOUT : END_POINT.U_ABOUT;
    postApiCall(endPoint, data)
      .then(res => {
        if (res.Code === 2) {
          Commons.snackBar(res.Message, COLORS.danger);
          dispatch(logout());
          Commons.reset(props.navigation, ROUTES.LOGIN);
        } else if (res.Code === 1) {
          if (Object.keys(res.Data).length === 0) {
            Commons.snackBar(res.Message, COLORS.green);
          } else {
            dispatch(setAboutUs(res.Data.About));
          }
        } else if (res.Code === 0) {
          Commons.snackBar(res.Message, COLORS.primary);
        }
        setRefreshing(false);
      })
      .catch(err => {
        console.warn(err);
        setRefreshing(false);
      });
  };

  return (
    <Screen style={Styles.screen_bg_white}>
      <Header
        navigation={props.navigation}
        title={'About Us'}
        showBackButton={true}
        showDrawerBtn={false}
        onBackPress={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View style={Styles.about_us_main_cont}>
          <AppText
            children={aboutUs.About ? aboutUs.About : 'About Us'}
            style={Styles.about_us_text}
          />
          <View style={Styles.divider} />
          <ContactCard
            icon="phone"
            iconType="feather"
            iconSize={iconSize}
            iconColor={iconColor}
            cardTitle="Phone"
            cardSubTitle={aboutUs.Phone}
            onPress={() => {
              Commons.callNumber(aboutUs.Phone);
            }}
          />
          <View style={Styles.divider} />
          <ContactCard
            icon="email-outline"
            iconType="materialCommunity"
            iconSize={iconSize}
            iconColor={iconColor}
            cardTitle="Email"
            cardSubTitle={aboutUs.Email}
            onPress={() => {
              Commons.mailTo(aboutUs.Email);
            }}
          />
          <View style={Styles.divider} />
          <ContactCard
            icon="globe-outline"
            iconType="ionicon"
            iconSize={iconSize}
            iconColor={iconColor}
            cardTitle="Website"
            cardSubTitle={aboutUs.Website}
            onPress={() => {
              if (Commons.isValidUrl(aboutUs.Website)) {
                Commons.openURL(aboutUs.Website);
              } else {
                Commons.openURL('https://' + aboutUs.Website);
              }
            }}
          />
          <View style={Styles.divider} />
          <ContactCard
            icon="facebook"
            iconType="feather"
            iconSize={iconSize}
            iconColor={iconColor}
            cardTitle="Facebook"
            cardSubTitle={aboutUs.Facebook}
            onPress={() => {
              Commons.openURL(aboutUs.Facebook);
            }}
          />
          <View style={Styles.divider} />
          <ContactCard
            icon="md-location-outline"
            iconType="ionicon"
            iconSize={iconSize}
            iconColor={iconColor}
            cardTitle="Location"
            cardSubTitle={aboutUs.Address}
            onPress={() => {
              let latitude = aboutUs.Latitude;
              let longitude = aboutUs.Longitude;
              Commons.openMap(latitude, longitude);
            }}
          />
        </View>
      </ScrollView>
      {loader ? <Loader /> : null}
    </Screen>
  );
}

export default About;
