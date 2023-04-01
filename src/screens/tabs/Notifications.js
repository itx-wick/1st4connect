import React, {useEffect} from 'react';
import {View, Image, RefreshControl} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  Screen,
  Header,
  Loader,
  AppText,
  NotificationsList,
} from '../../components';
import {COLORS, END_POINT, IMAGES, ROUTES} from '../../constants';
import {FloatingBtnActions} from '../../data';
import {logout} from '../../redux/auth/authAction';
import {setNotificationsList} from '../../redux/tabs/tabsAction';
import {postApiCall} from '../../services/ApiServices';
import {Styles} from '../../styles';
import {Commons} from '../../utils';

function Notifications(props) {
  const dispatch = useDispatch();
  const notificationsList = useSelector(state => state.tabs.notificationsList);
  const loader = useSelector(state => state.common.loader);
  const user = useSelector(state => state.user.currentUser);
  const userType = useSelector(state => state.common.userType);
  const userList = useSelector(state => state.common.usersList);
  const [refreshing, setRefreshing] = React.useState(false);

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener('focus', () => {
  //     getNotifications();
  //   });
  //   return unsubscribe;
  // }, [props.navigation]);

  useEffect(() => {
    getNotifications();
  }, []);

  const onRefresh = () => {
    getNotifications();
  };

  const getNotifications = () => {
    setRefreshing(true);
    let data =
      userType === 'T'
        ? {
            ID: user.ID,
            APIAccessToken: user.APIAccessToken,
            Type: userType,
            UpdatedOn: user.UpdatedOn,
            Timestamp: Date.now(),
          }
        : {
            ID: user.ID,
            APIAccessToken: user.APIAccessToken,
            Type: userType,
            Timestamp: Date.now(),
          };
    let endPoint =
      data.Type === 'T' ? END_POINT.T_NOTIFICATIONS : END_POINT.U_NOTIFICATIONS;

    postApiCall(endPoint, data)
      .then(res => {
        if (res.Code === 2) {
          Commons.snackBar(res.Message, COLORS.primary);
          dispatch(logout());
          Commons.reset(props.navigation, ROUTES.LOGIN);
        } else if (res.Code === 1) {
          if (Object.keys(res.Data).length === 0) {
            Commons.snackBar(res.Message, COLORS.green);
          } else {
            const uniqueData = res.Data.Notifications.filter(element => {
              const isDuplicate = notificationsList.includes(element.ID);
              if (!isDuplicate) {
                notificationsList.push(element.ID);
                return true;
              }
              return false;
            });
            dispatch(setNotificationsList(uniqueData));
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
    <>
      <Screen>
        <Header
          navigation={props.navigation}
          title={'Notifications'}
          showBackButton={false}
          showDrawerBtn={true}
          onDrawerPress={() => {
            props.navigation.openDrawer();
          }}
        />
        <View style={Styles.announcement_main_cont}>
          {notificationsList.length > 0 ? (
            <NotificationsList
              data={notificationsList}
              refreshing={refreshing}
              onRefresh={onRefresh}
              instance={props}
            />
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  //refresh control used for the Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }>
              <View style={{flex: 1}}>
                <Image source={IMAGES.noData} style={Styles.noDataImg2} />
              </View>
            </ScrollView>
          )}
        </View>
        {userList.length > 1 && (
          <View style={Styles.currentUserView}>
            <AppText
              children={user.FirstName + ' ' + user.LastName + ' '}
              style={{color: COLORS.white}}
            />
          </View>
        )}
        {userType == 'T' && user.NotificationRights == 0 && (
          <FloatingAction
            actions={FloatingBtnActions}
            color={COLORS.primary}
            onPressItem={name => {
              if (name === 'bt_create') {
                Commons.navigate(props.navigation, ROUTES.CREATE_NOTIFICATION);
              }
            }}
          />
        )}
      </Screen>
      {loader ? <Loader /> : null}
    </>
  );
}

export default Notifications;
